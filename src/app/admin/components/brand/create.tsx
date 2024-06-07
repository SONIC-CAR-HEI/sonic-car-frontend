import { Create, SimpleForm, TextInput } from 'react-admin';

export const BrandCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput name={'name'} source={'name'} />
        <TextInput name={'logoUrl'} source={'logoUrl'} />
      </SimpleForm>
    </Create>
  );
};
