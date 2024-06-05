import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const AdminApp = dynamic(() => import('@/src/app/admin/components/Admin'), {
  ssr: false,
});

const AdminPage: NextPage = () => <AdminApp />;

export default AdminPage;

/**
 * This is a page.tsx for one version
 */

// import { NextPage } from 'next';
// import dynamic from 'next/dynamic';
// const AdminApp = dynamic(() => import('../../admin/admin'), { ssr: false });

// const AdminPage: NextPage = () => <AdminApp />;

// export default AdminPage;
