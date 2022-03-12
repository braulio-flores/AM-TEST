import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const MagicMain = () => {
  return (
    <Provider store={ store } >
      <h1>HP APP</h1>
    </Provider>
  )
}

export default MagicMain