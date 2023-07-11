import { NavLink } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../assets/icons/logo.svg';
import s from './Logo.module.css';

export const Logo = () => {
  return (
    <NavLink className={s.logoContainer} to="/main/drinks">
      <SiteLogo className={s.logo} />
      <h3 className={s.title}>DrinkMaster</h3>
    </NavLink>
  );
};
