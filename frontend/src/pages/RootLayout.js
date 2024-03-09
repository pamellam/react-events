import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  /*navigation.state = check if we initated transiton,
   or if we are in the middle of a transition, or its done */
  const navigation = useNavigation();
 
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
