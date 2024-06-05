import { Create, SimpleForm, TextInput } from 'react-admin';

export const CarTypeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source={'name'} name={'name'} />
        <TextInput name={'description'} source={'description'} />
      </SimpleForm>
    </Create>
  );
};
