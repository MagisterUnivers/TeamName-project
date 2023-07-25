import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAccessToken, selectRender } from 'redux/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/Auth/authOperations';
import { getCurrentUserThunk } from 'redux/UserInfo/userOperations';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthAccessToken);
  const isFirstRender = useSelector(selectRender);

  useEffect(() => {
    dispatch(refreshThunk(token));
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
