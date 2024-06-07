import {
  DeleteButton,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

export const CarImageShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="imageUrl" />
      <ReferenceField source="carId" reference="car" link={'show'} />
    </SimpleShowLayout>
    <DeleteButton label={'Delete'} />
  </Show>
);
