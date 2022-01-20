import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './components/Home';
import RQuseQuery from './components/RQuseQuery';
import RQuseQueryError from './components/RQuseQueryError';
import RQuseQueryStatus from './components/RQuseQueryStatus';
import RQuseQueryDataStatus from './components/RQuseQueryDataStatus';
import RQuseQueryRefetch from './components/RQuseQueryRefetch';
import RQuseQueryCallback from './components/RQuseQueryCallback';
import RQcustomHook from './components/RQcustomHook';
import RQuseQueryId from './components/RQuseQueryId';
import RQuseQueryIdDetail from './components/RQuseQueryIdDetail';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/useQuery">01.RQuseQuery</Link>
            </li>
            <li>
              <Link to="/useQueryError">02.RQuseQueryError</Link>
            </li>
            <li>
              <Link to="/useQueryStatus">03.RQuseQueryStatus</Link>
            </li>
            <li>
              <Link to="/useQueryDataStatus">04.RQuseQueryDataStatus</Link>
            </li>
            <li>
              <Link to="/useQueryRefetch">05.RQuseQueryRefetch</Link>
            </li>
            <li>
              <Link to="/useQueryCallback">06.RQuseQueryCallback</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link to="/customHook">07.RQcustomHook</Link>
            </li>
            <li>
              <Link to="/useQueryId">08.RQuseQueryId</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useQuery" element={<RQuseQuery />} />
          <Route path="/useQueryError" element={<RQuseQueryError />} />
          <Route path="/useQueryStatus" element={<RQuseQueryStatus />} />
          <Route path="/useQueryDataStatus" element={<RQuseQueryDataStatus />} />
          <Route path="/useQueryRefetch" element={<RQuseQueryRefetch />} />
          <Route path="/useQueryCallback" element={<RQuseQueryCallback />} />
          <Route path="/customHook" element={<RQcustomHook />} />
          <Route path="/useQueryId/:userId" element={<RQuseQueryIdDetail />} />
          <Route path="/useQueryId" element={<RQuseQueryId />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
