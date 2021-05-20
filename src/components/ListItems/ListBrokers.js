import React from 'react'
import { useQuery } from '@apollo/client';
import { Brokers } from '../../graphql/queries';
import { List } from '../../imports/import';
import ListProperties from './ListProperties';
import Error from '../Utils/Error';

const ListBrokers = () => {
  const { loading, error, data: dataBroker } = useQuery(Brokers);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <div>
      <h1>Brokers - Properties</h1>
        {
          dataBroker.brokers.map((e) => {
            return (
              <List key={e.id}>
                <h3>{e.name}</h3>
                <ListProperties brokerId={e.id} />
              </List>
            )
          })
        }
    </div>
  )
}

export default ListBrokers;
