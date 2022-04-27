import React from 'react';
import List from './components/List';
import SearchContainer from './components/SearchContainer';
import { BookProvider } from './providers/BookProvider';

function App() {
  return (
        <>
        <BookProvider>
          <List/>
          <SearchContainer/>
        </BookProvider>
        </>
  );
}

export default App;