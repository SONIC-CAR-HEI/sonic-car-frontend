import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const AdminList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="firstName" />
      <TextField source="lastName" />
    </Datagrid>
  </List>
);
