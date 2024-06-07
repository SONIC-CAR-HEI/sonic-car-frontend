import { CarData } from 'provider/api/car';
import {
  BooleanField,
  Datagrid,
  FunctionField,
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
      <FunctionField
        source={'description'}
        label={'Description'}
        render={(record: CarData) => `${record.description.slice(0, 70)}...`}
      />
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
