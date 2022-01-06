import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import RQUser from './components/RQUser';
import Home from './components/Home';

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
                <Link to="/user">user</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<RQUser />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
