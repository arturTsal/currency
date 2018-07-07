import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import Form from'./Form/Form';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form>

        </Form>
      </Provider>
    );
  }
}

export default App;
