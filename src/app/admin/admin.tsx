'use client';
import {
  Layout,
  Admin,
  Button,
  DateInput,
  List,
  ListGuesser,
  Resource,
  TextInput,
  useListContext,
  LayoutComponent,
} from 'react-admin';
import { Event } from '@mui/icons-material';
import jsonServerProvider from 'ra-data-json-server';
import { SoLayout } from '../../layouts/Layouts';
import { CarList } from 'components/listProduct/ListProduct';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function MyListComponent() {
  return (
    <List
      title="my title"
      sx={{
        border: '1px',
        color: 'red',
      }}
      filters={[
        <TextInput alwaysOn source="name" key="name" label="test" />,
        <TextInput source="name" key="name" label="test" />,
        <DateInput source="date" />,
      ]}
    >
      <MyListContent />
    </List>
  );
}

function MyListContent() {
  const { data = [], isLoading } = useListContext();
  return data.map((el) => (
    <Button startIcon={<Event />} label={el.name} key={el.name} />
  ));
}

export default function AdminApp() {
  return (
    <Admin dataProvider={dataProvider} layout={SoLayout as LayoutComponent}>
      <Resource name="photos" list={CarList} />
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  );
}
