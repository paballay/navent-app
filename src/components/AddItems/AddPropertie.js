import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { CreateProperty } from '../../graphql/mutations';
import { Brokers } from '../../graphql/queries';
import { Label, Input } from '../../imports/import';

const AddPropertie = () => {
  const defaultProperty = {
    brokerId: null,
    address: null,
    latitude: null,
    longitude: null,
    price: null,
    currency: null,
  }
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
        <Label className="form-label">State</Label>
        <select className="form-select" name="brokerId" onChange={handleInputChange}>
        {
          data && data.brokers.map((e, i) => {
            if (i === 0) return <option key={e.id} value={e.id} name="brokerId" defaultValue>{e.name}</option>
            return <option key={e.id} value={e.id} name="brokerId">{e.name}</option>
          })
        }
        </select>
      </div>
      <div className="col-md-6">
        <Label className="form-label">Direccion</Label>
        <Input className="form-control" type="text" name="address" onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <Label className="form-label">Latitud</Label>
        <Input className="form-control" type="number" name="latitude" onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <Label className="form-label">Longitud</Label>
        <Input className="form-control" type="number" name="longitude" onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <Label className="form-label">Precio</Label>
        <Input className="form-control" type="number" name="price" onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <Label className="form-label">Moneda</Label>
        <Input className="form-control" type="text" name="currency" onChange={handleInputChange} />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Agregar</button>
      </div>
    </form>
  )
}

export default AddPropertie;