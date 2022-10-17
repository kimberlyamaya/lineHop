import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// pages
import Home from './pages/Home';
import Header from './components/header/index';
import Signin from './components/Signin'
import Signup from './components/Signup'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// kim added 10/16/22
const httpLink = createHttpLink({
  // uri: '/graphql',
  uri: 'http://localhost:3007/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// end 


function App() {
  return (
    // kim wrapped return in ApolloProvider
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signin' element = {<Signin />} />
        </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
