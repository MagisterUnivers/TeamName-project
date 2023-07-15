import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken } from 'redux/selectors';
import { useCallback, useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/authOperations';

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

  const dispatch = useDispatch();
  const token = useSelector(selectAuthAccessToken);
  // let digit = useRef(0); //eslint-disable-line

  const loadDataOnlyOnce = useCallback(() => {
    dispatch(refreshThunk(token));
  }, [dispatch, token]);

  // useEffect(() => {
  //   if (digit < 1) dispatch(refreshThunk(token)).then(() => (digit += 1));
  // }, []); //eslint-disable-line

  useEffect(() => {
    loadDataOnlyOnce();
  }, [loadDataOnlyOnce]);

  return (
    <>
      <Header />
      <main style={{ width: '100%', height: '90vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
