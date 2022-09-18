import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './index.css';
import App from './App';

const client = new ApolloClient({
    uri:  'https://api-ap-northeast-1.hygraph.com/v2/cl7t1t1xa0fa101tf0k863kah/master',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </ApolloProvider>
);

