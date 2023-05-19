import React from 'react';

import { Log } from '../../../../context/LogsContext';

import styles from './style.module.scss';
import { LogElem } from './LogElem/LogElem';

interface LogsListProps {
  isLogsOpen: boolean;
  logs: Log[];
}

export const LogsList: React.FC<LogsListProps> = ({ logs = [], isLogsOpen }) => {
  return (
    <ul className={`${styles.logs_list} ${!isLogsOpen && styles.hidden}`}>
      {logs.map((log: Log, index) => {
        return <LogElem key={log.time + index} log={log} />;
      })}
    </ul>
  );
};
