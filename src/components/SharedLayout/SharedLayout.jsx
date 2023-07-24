import { Outlet } from 'react-router-dom';
import { Header, Footer, Container } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthAccessToken,
  selectRender,
  selectTheme,
  selectUserArray,
} from 'redux/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/authOperations';
import { getCurrentUserThunk } from 'redux/UserInfo/userOperations';

const SharedLayout = () => {
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

  const dispatch = useDispatch();
  const token = useSelector(selectAuthAccessToken);
  const user = useSelector(selectUserArray);
  const isFirstRender = useSelector(selectRender);
  // const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshThunk(token));
    // console.log(user);
    if (isFirstRender) dispatch(getCurrentUserThunk());
  }, []); // eslint-disable-line

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
