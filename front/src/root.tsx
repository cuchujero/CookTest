import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { App } from './App.tsx';
import { client } from './graphql/client.ts';
import { Provider as JotaiProvider } from 'jotai';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JotaiProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </JotaiProvider>
  </React.StrictMode>
);
