import { createContext } from 'react';

export interface Log {
  url: string;
  time: string;
  error?: string;
}

interface LogsContextProps {
  logs: Log[];
  addLogs: (logs: Log) => void;
}

const initState = {
  logs: [],
  addLogs: () => {},
};

export const LogsContext = createContext<LogsContextProps>(initState);
