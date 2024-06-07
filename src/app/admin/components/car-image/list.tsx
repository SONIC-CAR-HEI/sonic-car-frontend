import {
  Datagrid,
  DeleteButton,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const CarImageList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="imageUrl" />
      <ReferenceField source="carId" reference="car" link={'show'} />
    </Datagrid>
  </List>
);
