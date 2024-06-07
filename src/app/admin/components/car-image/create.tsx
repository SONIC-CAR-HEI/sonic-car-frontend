import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CarImageCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput name={'imageUrl'} source={'imageUrl'} />
        <ReferenceInput name={'carId'} source={'carId'} reference={'car'} />
      </SimpleForm>
    </Create>
  );
};
