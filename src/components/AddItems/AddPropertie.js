import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { CreateProperty } from '../../graphql/mutations';
import { Brokers } from '../../graphql/queries';
import { Label } from '../../imports/import';
import { defaultProperty, propertieFields } from './helpers';
import FormFields from './_children/FormFields';
import ButtonAdd from './_children/ButtonAdd';

const AddPropertie = () => {
  const { data } = useQuery(Brokers);
  const [property, setProperty] = useState(defaultProperty);
  const [createProperty] = useMutation(CreateProperty);

  const handleInputChange = (event) => {
    setProperty({
      ...property,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (e) => {
    e.preventDefault();
    createProperty({
      variables: {
        propertyinput: {
          brokerId: parseInt(property.brokerId, 10),
          address: property.address,
          latitude: parseFloat(property.latitude),
          longitude: parseFloat(property.longitude),
          price: parseInt(property.price, 10),
          currency: property.currency
        } 
      } 
    });
    setProperty(defaultProperty);
    e.target.reset();
  }

  return (
    <form className="row g-3" onSubmit={sendData}>
      <div className="col-md-6">
        <Label className="form-label">Broker</Label>
        <select className="form-select" name="brokerId" onChange={handleInputChange}>
          <option defaultValue>Elija un broker</option>
          {
            data && data.brokers.map((e, i) => (
              <option key={e.id} value={e.id} name="brokerId">{e.name}</option>
            ))
          }
        </select>
      </div>
      {
        propertieFields.map((e, i) => (
          <FormFields dataFields={propertieFields[i]} inputChange={handleInputChange} key={i} />
        ))
      }
      <ButtonAdd />
    </form>
  )
};

export default AddPropertie;