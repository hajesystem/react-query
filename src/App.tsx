import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './components/Home';
import RQuseQuery from './components/RQuseQuery';
import RQuseQueryError from './components/RQuseQueryError';
import RQuseQueryStatus from './components/RQuseQueryStatus';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/useQuery">useQuery</Link>
              </li>
              <li>
                <Link to="/useQueryError">useQuery_Error</Link>
              </li>
              <li>
                <Link to="/useQueryStatus">useQuery_Status</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useQuery" element={<RQuseQuery />} />
            <Route path="/useQueryError" element={<RQuseQueryError />} />
            <Route path="/useQueryStatus" element={<RQuseQueryStatus />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
