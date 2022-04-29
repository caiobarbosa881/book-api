import React from 'react';
import List from './components/List';
import SearchContainer from './components/SearchContainer';
import GlobalContext from './GlobalContext';

export const App: React.FC = () => {
  return (
        <>
        <GlobalContext>
          <List/>
          <SearchContainer/>
        </GlobalContext>
        </>
  );
}

export default App;