import { DeleteButton, Show, SimpleShowLayout, TextField } from 'react-admin';

export const BrandShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="logoUrl" />
    </SimpleShowLayout>
    <DeleteButton label={'Delete'} />
  </Show>
);
