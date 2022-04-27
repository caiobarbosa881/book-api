import React, { useState, useReducer, createContext } from 'react';
import { BookReducer } from '../BookReducer';

export type IState = {
  list: string | null,
  livro: string | null,
  autor: string | null,
  data: string | null,
  form: string | null,
  input: string | null,
}

export interface IAction {
  type: 'SETLIST' | 'SETLIVRO' | 'SETAUTOR' | 'SETDATA' | 'SETFORM' | 'SETINPUT' | 'SETFULLFORM' | 'SETEMPTYLIVRO' | 'SETLIVROUPPERCASE' | 'SETNOCONNECTION' | 'SETEMPTYAUTOR' | 'SETEMPTYDATA' | 'SETCANTFOUND' | 'SETREMEMBER' | 'SETLISTZERO' | 'SETLISTFULL'
  payload?: any
}

interface IBookProvider {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IState = {
  list: 'list-container scaley-zero',
  livro: '',
  autor: '',
  data: '',
  form: 'form-container scalex-zero',
  input: '',
}
const BookContext = createContext<IState>(initialState); 

const BookProvider = ({ children } : IBookProvider) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);

  return (
      <BookContext.Provider value={{state: IState, dispatch}}>
        {children}
      </BookContext.Provider>
  );
};

export { BookContext, BookProvider }