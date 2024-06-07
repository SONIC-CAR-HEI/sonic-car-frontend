import {
  DeleteButton,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

export const AdminShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="firstName" />
      <TextField source="lastName" />
    </SimpleShowLayout>
    <DeleteButton label={'Delete'} />
  </Show>
);
