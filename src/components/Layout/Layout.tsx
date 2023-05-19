import React from 'react';
import { Header } from '../Header/Header';
import styles from './styles.module.scss';
import { Logs } from '../Logs/Logs';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Logs />
    </div>
  );
};
