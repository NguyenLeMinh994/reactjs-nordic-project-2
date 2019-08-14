import React, { PureComponent } from 'react';
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



export default App;