import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CarTypeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source={'name'} name={'name'} />
        <TextInput name={'description'} source={'description'} />
      </SimpleForm>
    </Edit>
  );
};
