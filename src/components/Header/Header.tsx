import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/get">
        GET
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/post">
        POST
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.link)} to="/delete">
        DELETE
      </NavLink>
    </header>
  );
};
