import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <Outlet />
    </main>
  );
};

export default Layout;
