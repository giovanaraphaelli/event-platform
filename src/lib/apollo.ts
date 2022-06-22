import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ob6nup1n8h01xm6z3t60cj/master',
  cache: new InMemoryCache(),
});
