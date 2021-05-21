export const defaultBroker = {
  name: null,
  address: null,
}

export const defaultProperty = {
  brokerId: null,
  address: null,
  latitude: null,
  longitude: null,
  price: null,
  currency: null,
};

export const brokerFields = [{
  attribute: 'name',
  text: 'Nombre',
},
{
  attribute: 'address',
  text: 'Direccion',
}];

export const propertieFields = [{
  attribute: 'address',
  text: 'Direccion',
},
{
  attribute: 'latitude',
  text: 'Latitud',
},
{
  attribute: 'longitude',
  text: 'Longitud',
},
{
  attribute: 'price',
  text: 'Precio',
},
{
  attribute: 'currency',
  text: 'Moneda',
}];
