// import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectDb } from '@/db/connectDB';
import { schemas } from '@/db/schema';
import { resolvers } from '@/db/resolver';

const server = new ApolloServer({
  resolvers:resolvers,
  typeDefs:schemas,
  introspection:true,
});
connectDb()
const connectGQL = async () => {
  const {url} =  await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  });
  console.log(`🚀  Server ready at ${url}`);
}
connectGQL()


export { connectGQL as GET, connectGQL as POST };