import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const AdminApp = dynamic(() => import('@/src/app/admin/components/Admin'), {
  ssr: false,
});

const AdminPage: NextPage = () => <AdminApp />;

export default AdminPage;
