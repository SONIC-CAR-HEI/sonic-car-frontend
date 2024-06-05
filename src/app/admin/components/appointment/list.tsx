import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const AppointmentList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="status" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="message" />
      <EmailField source="email" />
      <TextField source="tel" />
      <DateField source="date" />
      <ReferenceField source="carId" reference="car" />
      <ReferenceField source="adminId" reference="admin" />
    </Datagrid>
  </List>
);
