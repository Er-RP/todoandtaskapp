// import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
import { connectDb } from '@/db/connectDB';
import { schemas } from '@/db/schema';
import { resolvers } from '@/db/resolver';




import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';

interface MyContext {
  token?: String;
}
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  resolvers:resolvers,
  typeDefs:schemas,
  introspection:true,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
connectDb().then(async ()=>await server.start())
.then(async () => await app.use(
  '/api',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
)).then(async()=> await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve)))
.then((res) => console.log(`🚀 Server ready at http://localhost:4000/api`,res))
.catch((error)=>console.log("RP error:",error))
