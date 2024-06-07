import { DeleteButton, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CarTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
    <DeleteButton label={'Delete'} />
  </Show>
);
