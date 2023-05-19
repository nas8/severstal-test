import { useContext, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { LogsContext } from '../../context/LogsContext';
import { getCurrentTime } from '../../utils/getCurrentTime';
import { postData } from '../../api/post';

import styles from './styles.module.scss';

export const PostPage: React.FC = () => {
  const { addLogs } = useContext(LogsContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const time = getCurrentTime();
    setIsLoading(true);

    const response: any = await postData();

    if (response.ok) {
      addLogs({ url: response.url, time: time });
    } else {
      addLogs({ url: response.url, time: time, error: response.error });
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.root}>
      <Button onClick={handleClick}>POST</Button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
