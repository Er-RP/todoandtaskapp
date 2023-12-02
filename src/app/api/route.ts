import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import cors from 'cors';
import { connectDb } from '@/db/connectDB';
import { schemas } from '@/db/schema';
import { resolvers } from '@/db/resolver';

const server = new ApolloServer({
  resolvers:resolvers,
  typeDefs:schemas,
  introspection:true,
});
connectDb()
const handler = startServerAndCreateNextHandler(server, {context : async (req,res) => {
  // Your additional context logic goes here

  // Return the context object
  return {
   req,res,cors:cors()
  };
} });

export { handler as GET, handler as POST };
