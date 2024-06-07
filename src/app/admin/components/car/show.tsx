import {
  BooleanField,
  DeleteButton,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

export const CarShow = () => (
  <Show>
    <SimpleShowLayout>
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
    </SimpleShowLayout>
    <DeleteButton label={'Delete'} />
  </Show>
);
