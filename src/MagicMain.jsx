import React from 'react';
import { Provider } from 'react-redux';
import MainContent from './components/ui/MainContent';
import { store } from './store/store';

const MagicMain = () => {
  return (
    <Provider store={ store } >
      <MainContent />
    </Provider>
  )
}

export default MagicMain