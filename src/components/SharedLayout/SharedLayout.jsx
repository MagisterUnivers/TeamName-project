import { Outlet } from 'react-router-dom';

import { Header,Footer } from 'components';

export const SharedLayout = () => {
  /**
    |============================
    | 
    |============================
  */

  // useEffect(() => {
  //   (async () => {
  //     const { error } = await dispatch(refreshThunk());

  //     if (error) return;

  //     dispatch(fetchUserDataThunk());
  //   })();
  // }, [dispatch]);

  /**
  |============================
  | Need to refresh when we done with register/login
  |============================
*/

  return (
    <>
      <Header />
      <main style={{width:'100%', height:'90vh'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
