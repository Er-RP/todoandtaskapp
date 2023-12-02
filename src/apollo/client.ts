import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://todoandtaskapp-git-dev-er-rp.vercel.app/api',
    cache: new InMemoryCache(),
  });