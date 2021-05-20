import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CreateBroker } from '../../graphql/mutations';
import { Label, Input } from '../../imports/import';

const AddBroker = () => {
  const [broker, setBroker] = useState({ name: null, address: null });
  const [createBroker] = useMutation(CreateBroker);

  const handleInputChange = (event) => {
    setBroker({ 
      ...broker,
      [event.target.name] : event.target.value 
    })
  }
  
  const sendData = (e) => {
    e.preventDefault();
    createBroker({ variables: { brokerinput: { name: broker.name, address: broker.address } }});
    setBroker({ name: null, address: null });
    e.target.reset();
  }

  return (
    <form className="row g-3" onSubmit={sendData}>
      <div className="col-md-6">
        <Label className="form-label">Nombre</Label>
        <Input className="form-control" type="text" name="name" onChange={handleInputChange}/>
      </div>
      <div className="col-md-6">
        <Label className="form-label">Direccion</Label>
        <Input className="form-control" type="text" name="address" onChange={handleInputChange}/>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Agregar</button>
      </div>
    </form>
  )
}

export default AddBroker;
    