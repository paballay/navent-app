import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CreateBroker } from '../../graphql/mutations';
import { Brokers } from '../../graphql/queries';
import FormFields from './_children/FormFields';
import { defaultBroker, brokerFields } from './helpers';
import ButtonAdd from './_children/ButtonAdd';

const AddBroker = () => {
  const [broker, setBroker] = useState(defaultBroker);
  const [createBroker] = useMutation(CreateBroker);


  const handleInputChange = (event) => {
    setBroker({ 
      ...broker,
      [event.target.name] : event.target.value 
    })
  }
  
  const sendData = (e) => {
    e.preventDefault();
    createBroker({ variables: { brokerinput: { name: broker.name, address: broker.address } }, refetchQueries: [{ query: Brokers }]});
    setBroker(defaultBroker);
    e.target.reset();
  }

  return (
    <form className="row g-3" onSubmit={sendData}>
      {
        brokerFields.map((e, i) => (
          <FormFields dataFields={brokerFields[i]} inputChange={handleInputChange} key={i} />
        ))
      }
      <ButtonAdd />
    </form>
  )
};

export default AddBroker;
    