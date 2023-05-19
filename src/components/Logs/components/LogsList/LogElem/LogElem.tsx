import { memo } from 'react';
import { Log } from '../../../../../context/LogsContext';

interface LogElemProps {
  log: Log;
}

export const LogElem = memo(({ log }: LogElemProps) => {
  return (
    <li>
      {log.url}, {log.time} {log.error && <span style={{ color: 'red' }}>{log.error}</span>}
    </li>
  );
});
