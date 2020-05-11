import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/configureStore';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
      </BrowserRouter>
  </Provider>
  );
};

export default App