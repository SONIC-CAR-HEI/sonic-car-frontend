import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CarImageEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name={'imageUrl'} source={'imageUrl'} />
        <ReferenceInput
          name={'carId'}
          source={'carId'}
          reference={'car'}
          disabled
        />
      </SimpleForm>
    </Edit>
  );
};
