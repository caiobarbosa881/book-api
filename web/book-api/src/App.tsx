import React from 'react';
import List from './components/List';
import SearchContainer from './components/SearchContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store'

export const App: React.FC = () => {
  return (
        <>
        <Provider store={store}>
          <List/>
          <SearchContainer/>
        </Provider>
        </>
  );
}

export default App;