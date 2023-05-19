import { useContext, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { LogsContext } from '../../context/LogsContext';
import { getCurrentTime } from '../../utils/getCurrentTime';
import { deleteData } from '../../api/delete';

import styles from './styles.module.scss';

export const DeletePage: React.FC = () => {
  const { addLogs } = useContext(LogsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    const time = getCurrentTime();

    setIsLoading(true);

    const response: any = await deleteData();

    if (response.ok) {
      addLogs({ url: response.url, time: time });
    } else {
      addLogs({ url: response.url, time: time, error: response.error });
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.root}>
      <Button onClick={handleClick}>DELETE</Button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
