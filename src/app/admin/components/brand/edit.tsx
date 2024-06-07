import { Edit, SimpleForm, TextInput } from 'react-admin';

export const BrandEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name={'logoUrl'} source={'logoUrl'} />
        <TextInput name={'name'} source={'name'} />
      </SimpleForm>
    </Edit>
  );
};
