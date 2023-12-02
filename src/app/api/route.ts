import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { connectDb } from '@/db/connectDB';
import { schemas } from '@/db/schema';
import { resolvers } from '@/db/resolver';

const server = new ApolloServer({
  resolvers:resolvers,
  typeDefs:schemas,
  introspection:true,
});
connectDb()
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };