import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as theme from './style'
import { ThemeProvider } from 'styled-components'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
