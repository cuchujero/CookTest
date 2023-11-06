import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { resolvers } from './graphql/resolver';
const apiRouter = require('./routes/apiRouter'); 
const apiGQLRouter = require('./routes/apiGQLRouter'); 
const cors = require('cors');

function createServer() {
  const server = express();
  server.use(cors());

  server.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );

  server.use('/api/v1', apiRouter);
  server.use('/apiGQL/v1', apiGQLRouter);

  return server;
}



export { createServer };
