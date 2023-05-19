import { useContext, useState } from 'react';
import { LogsContext } from '../../context/LogsContext';
import { getData } from '../../api/get';
import { getCurrentTime } from '../../utils/getCurrentTime';
import { Button } from '../../components/Button/Button';

import styles from './styles.module.scss';

export const GetPage: React.FC = () => {
  const { addLogs } = useContext(LogsContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const time = getCurrentTime();
    setIsLoading(true);

    const response: any = await getData();

    if (response.ok) {
      addLogs({ url: response.url, time: time });
    } else {
      addLogs({ url: response.url, time: time, error: response.error });
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.root}>
      <Button onClick={handleClick}>GET</Button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
