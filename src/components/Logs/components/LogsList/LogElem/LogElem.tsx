import { memo } from 'react';
import { Log } from '../../../../../context/LogsContext';

export const LogElem = memo(({ url, time, error }: Log) => (
  <li>
    {url}, {time} {error && <span style={{ color: 'red' }}>{error}</span>}
  </li>
));
