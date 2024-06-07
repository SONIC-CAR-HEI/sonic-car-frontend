'use client'; // remove this line if you choose Pages Router
import { CreateAdmin } from '@/src/app/admin/components/admin/create';
import { AppointmentList } from '@/src/app/admin/components/appointment/list';
import { BrandCreate } from '@/src/app/admin/components/brand/create';
import { CarTypeCreate } from '@/src/app/admin/components/car-type/create';
import { CarList } from '@/src/app/admin/components/car/list';
import { authProvider } from '@/src/provider/api/admin-auth-provider';
import { dataProvider } from '@/src/provider/api/admin-data-provider';
import {
  AdminPanelSettings,
  BurstMode,
  DirectionsCarFilled,
  EventAvailable,
  LocalActivity,
  MergeType,
} from '@mui/icons-material';
import { AdminList } from 'app/admin/components/admin/list';
import { AdminShow } from 'app/admin/components/admin/show';
import { AppointmentEdit } from 'app/admin/components/appointment/edit';
import { AppointmentShow } from 'app/admin/components/appointment/show';
import { BrandEdit } from 'app/admin/components/brand/edit';
import { BrandList } from 'app/admin/components/brand/list';
import { BrandShow } from 'app/admin/components/brand/show';
import { CarImageCreate } from 'app/admin/components/car-image/create';
import { CarImageEdit } from 'app/admin/components/car-image/edit';
import { CarImageList } from 'app/admin/components/car-image/list';
import { CarImageShow } from 'app/admin/components/car-image/show';
import { CarTypeEdit } from 'app/admin/components/car-type/edit';
import { CarTypeList } from 'app/admin/components/car-type/list';
import { CarTypeShow } from 'app/admin/components/car-type/show';
import { CarCreate } from 'app/admin/components/car/create';
import { CarEdit } from 'app/admin/components/car/edit';
import { CarShow } from 'app/admin/components/car/show';
import { AdminData } from 'provider/api/admin';
import { Admin, Resource } from 'react-admin';

const AdminApp = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name={'car-type'}
      list={CarTypeList}
      hasCreate
      edit={CarTypeEdit}
      show={CarTypeShow}
      create={CarTypeCreate}
      recordRepresentation={'name'}
      icon={MergeType}
    />
    <Resource
      name={'brand'}
      list={BrandList}
      hasCreate
      edit={BrandEdit}
      show={BrandShow}
      create={BrandCreate}
      recordRepresentation={'name'}
      icon={LocalActivity}
    />
    <Resource
      name={'car'}
      list={CarList}
      hasCreate
      edit={CarEdit}
      show={CarShow}
      create={CarCreate}
      recordRepresentation={'name'}
      icon={DirectionsCarFilled}
    />
    <Resource
      name={'appointment'}
      list={AppointmentList}
      show={AppointmentShow}
      edit={AppointmentEdit}
      icon={EventAvailable}
    />
    <Resource
      name={'admin'}
      list={AdminList}
      hasCreate
      show={AdminShow}
      create={CreateAdmin}
      recordRepresentation={(record: AdminData) =>
        `${record.firstName} ${record.lastName}`
      }
      icon={AdminPanelSettings}
    />
    <Resource
      name={'car-image'}
      list={CarImageList}
      edit={CarImageEdit}
      hasCreate
      show={CarImageShow}
      create={CarImageCreate}
      icon={BurstMode}
    />
  </Admin>
);

export default AdminApp;
