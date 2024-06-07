import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from 'react-admin';

export const CarList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="model" />
      <TextField source="name" />
      <TextField source="description" />
      <NumberField source="price" />
      <TextField source="engineType" />
      <NumberField source="placeNumber" />
      <TextField source="color" />
      <NumberField source="power" />
      <BooleanField source="available" />
      <BooleanField source="fav" />
      <ReferenceField source="typeId" reference="car-type" link={'show'} />
      <ReferenceField source="brandId" reference="brand" link={'show'} />
    </Datagrid>
  </List>
);
