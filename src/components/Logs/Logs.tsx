import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { LogsContext } from '../../context/LogsContext';
import { LogsHeader } from './components/LogsHeader/LogsHeader';
import { LogsList } from './components/LogsList/LogsList';

export const Logs: React.FC = () => {
  const [isLogsOpen, setIsLogsActive] = useState<boolean>(false);
  const { logs } = useContext(LogsContext);

  const handleClick = () => {
    setIsLogsActive((prevState) => !prevState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <LogsHeader isLogsOpen={isLogsOpen} handleClick={handleClick} />
        <LogsList logs={logs} isLogsOpen={isLogsOpen}></LogsList>
      </div>
    </div>
  );
};
