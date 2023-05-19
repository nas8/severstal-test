import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/Layout/Layout';
import { GetPage } from './pages/GetPage/GetPage';
import { PostPage } from './pages/PostPage/PostPage';
import { DeletePage } from './pages/DeletePage/DeletePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Log, LogsContext } from './context/LogsContext';
import { useState } from 'react';

function App() {
  const [logs, setLogs] = useState<Log[]>([]);

  const addLogs = (newData: Log) => {
    setLogs((prevData: Log[]) => [newData, ...prevData]);
  };

  return (
    <HashRouter>
      <LogsContext.Provider value={{ logs, addLogs }}>
        <Layout>
          <Routes>
            <Route index element={<GetPage />}></Route>
            <Route path="/get" element={<GetPage />}></Route>
            <Route path="/post" element={<PostPage />}></Route>
            <Route path="/delete" element={<DeletePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Layout>
      </LogsContext.Provider>
    </HashRouter>
  );
}

export default App;
