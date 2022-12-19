import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './App'
import Loading from './components/loading'

import './index.css'

const client = new ApolloClient({
  uri: 'https://icaro-sample-shop.up.railway.app/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>
);
