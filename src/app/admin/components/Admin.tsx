'use client'; // remove this line if you choose Pages Router
import { CreateAdmin } from '@/src/app/admin/components/admin/create';
import { AppointmentList } from '@/src/app/admin/components/appointment/list';
import { BrandCreate } from '@/src/app/admin/components/brand/create';
import { CarTypeCreate } from '@/src/app/admin/components/car-type/create';
import { CarList } from '@/src/app/admin/components/car/list';
import { authProvider } from '@/src/provider/api/admin-auth-provider';
import { dataProvider } from '@/src/provider/api/admin-data-provider';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin';

const AdminApp = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name={'car-type'}
      list={ListGuesser}
      hasCreate
      show={ShowGuesser}
      create={CarTypeCreate}
    />
    <Resource
      name={'brand'}
      list={ListGuesser}
      hasCreate
      show={ShowGuesser}
      create={BrandCreate}
    />
    <Resource name={'car'} list={CarList} hasCreate show={ShowGuesser} />
    <Resource name={'appointment'} list={AppointmentList} show={ShowGuesser} />
    <Resource
      name={'admin'}
      list={ListGuesser}
      hasCreate
      show={ShowGuesser}
      create={CreateAdmin}
    />
  </Admin>
);

export default AdminApp;
