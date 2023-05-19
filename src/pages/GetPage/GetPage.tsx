import { useContext } from 'react';
import { LogsContext } from '../../context/LogsContext';
import { getData } from '../../api/get';
import { getCurrentTime } from '../../utils/getCurrentTime';
import { Button } from '../../components/Button/Button';

export const GetPage: React.FC = () => {
  const { addLogs } = useContext(LogsContext);

  const handleClick = async () => {
    const time = getCurrentTime();

    const response: any = await getData();

    if (response.ok) {
      addLogs({ url: response.url, time: time });
    } else {
      addLogs({ url: response.url, time: time, error: response.error });
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>GET</Button>
    </div>
  );
};
