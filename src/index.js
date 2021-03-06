import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewTodo from './features/todos/newTodo';
import Description from './features/todos/description';
import MainBoard from './components/mainBoard';
import store from './store';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';
import { routes } from './constants';
import { theme } from './myMuiTheme';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={routes.HOME} element={<App />}>
              <Route index element={<MainBoard />} />
              <Route path={routes.NEW} element={<NewTodo />} />
              <Route path={routes.DESC} element={<Description />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
