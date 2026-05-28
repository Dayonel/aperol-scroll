import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://metaphysics-staging.artsy.net/v2',
      headers: {
        'x-access-token': process.env.ARTSY_ACCESS_TOKEN || '',
        'x-user-id': process.env.ARTSY_USER_ID || '',
      },
    }),
  });
});
