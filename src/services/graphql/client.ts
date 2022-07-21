import { GraphQLClient } from 'graphql-request';

export const clientGraphCMS = new GraphQLClient(
  process.env.GRAPHCMS_ENDPOINT!,
).setHeaders({
  authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
});
