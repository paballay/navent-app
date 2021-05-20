import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import client from './graphql/client';
import AddBroker from './components/AddItems/AddBroker';
import AddPropertie from './components/AddItems/AddPropertie';
import ListBrokers from './components/ListItems/ListBrokers';

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="container mt-5">
        <h1>Panel de Brokers de Bienes Raíces</h1>
        <div className="row">
          <div className="col">
          <div className="row">
            <AddBroker />
            </div>
          <div className="row">
            <AddPropertie />
            </div>            
          </div>
          <div className="col">
            <ListBrokers />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}
 
export default App;
