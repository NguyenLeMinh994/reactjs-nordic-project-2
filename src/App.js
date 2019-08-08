import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Pages from './container/Pages/Pages';
import store from './store/store';

class App extends PureComponent {
  render() {
    return (

      <Provider store={store}>
        <Pages />
      </Provider>

    );
  }
}

App.propTypes = {

};

export default App;