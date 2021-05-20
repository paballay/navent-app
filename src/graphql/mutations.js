import { gql } from '@apollo/client';

export const CreateBroker = gql`
  mutation CreateBroker($brokerinput: BrokerInput!) {
    createBroker(brokerInput: $brokerinput) {
      name
      address
    }
  }
`;

export const CreateProperty = gql`
  mutation CreateBroker($propertyinput: PropertyInput!) {
    createProperty(propertyInput: $propertyinput) {
      id
      broker {
        id
        name
        address
      }
      address
      latitude
      longitude
      price
      currency
    }
  }
`;