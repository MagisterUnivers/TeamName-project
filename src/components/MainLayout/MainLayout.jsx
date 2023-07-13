import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export const MainLayout = () => {
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
      <main
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Outlet />
        <h2>This is text test</h2>
      </main>
    </>
  );
};
