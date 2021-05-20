import React from 'react'
import PropTypes from 'prop-types';
import { List } from '../../imports/import';
import { useQuery } from '@apollo/client';
import { Properties } from '../../graphql/queries';
import Error from '../Utils/Error';

const ListProperties = ({ brokerId }) => {
  const { loading, error, data: dataPropertie } = useQuery(Properties);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <>
      {
        dataPropertie.properties.map((e) => {
          if(brokerId === e.broker.id) {
            return <List key={e.id}>{e.address}</List>
          }
          return null;
        })
      }
    </>
  );
}

ListProperties.propTypes = {
  brokerId: PropTypes.number.isRequired,
}

export default ListProperties;