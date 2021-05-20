import { gql } from '@apollo/client';

export const Brokers = gql`
  query getBrokers {
    brokers {
      id,
      name,
    }
  }
`;

export const Properties = gql`
  query getProperties {
    properties {
      id,
      broker {
        id,
      },
      address,
      price,
    }
  }
`;
