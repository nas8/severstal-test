import React from 'react';

import styles from './styles.module.scss';

interface LogsHeaderProps {
  isLogsOpen: boolean;
  handleClick: () => void;
}

export const LogsHeader: React.FC<LogsHeaderProps> = ({ isLogsOpen, handleClick }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Logs</span>
      <button className={styles.arrow_btn} onClick={handleClick}>
        {isLogsOpen ? '⬇' : '⬆'}
      </button>
    </div>
  );
};
