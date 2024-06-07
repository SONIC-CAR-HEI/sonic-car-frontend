import {
  DateField,
  DeleteButton,
  EmailField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

export const AppointmentShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="status" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="message" />
      <EmailField source="email" />
      <TextField source="tel" />
      <DateField source="date" />
      <ReferenceField source="carId" reference="car" link={'show'} />
      <ReferenceField source="adminId" reference="admin" link={'show'} />
    </SimpleShowLayout>
    <DeleteButton label={'Delete'} />
  </Show>
);
