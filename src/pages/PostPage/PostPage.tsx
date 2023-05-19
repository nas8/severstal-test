import { useContext } from 'react';
import { Button } from '../../components/Button/Button';
import { LogsContext } from '../../context/LogsContext';
import { getCurrentTime } from '../../utils/getCurrentTime';
import { postData } from '../../api/post';

export const PostPage: React.FC = () => {
  const { addLogs } = useContext(LogsContext);

  const handleClick = async () => {
    const time = getCurrentTime();

    const response: any = await postData();

    if (response.ok) {
      addLogs({ url: response.url, time: time });
    } else {
      addLogs({ url: response.url, time: time, error: response.error });
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>POST</Button>
    </div>
  );
};
