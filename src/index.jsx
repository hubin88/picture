import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

if (DEBUG) {
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    );
  };
  render(App);
  if (module.hot) module.hot.accept('./app', () => { render(App); });
} else {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<App />, rootEl);
}
