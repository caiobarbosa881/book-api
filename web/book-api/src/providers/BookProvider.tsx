import React, { useReducer, createContext } from 'react';

export const BookReducer = (state: IState, action: IAction) => {
  switch(action.type){
              case 'SETFULLFORM':
              return{
                input: "form-container scalex-full"
              }
              case 'SETEMPTYLIVRO':
              return{
                livro: ""
              }
              case 'SETEMPTYDATA':
                return{
                  data: ""
                }
                case 'SETEMPTYAUTOR':
                  return{
                   autor: ""
                  }
              case 'SETNOCONNECTION':
                return{
                  livro: "Infelizmente não há conexão com o sistema de livros no momento"
                }
                case 'SETREMEMBER':
                return{
                  livro: "Lembre-se de digitar o nome abaixo"
                }
                case 'SETCANTFOUND':
                return{
                  livro: "Nenhum Livro foi Encontrado"
                }
                case 'SETLISTZERO':
                return{
                  list: "list-container scaley-zero"
                }
                case 'SETLISTFULL':
                  return{
                    list: "list-container scaley-full"
                  }
    default:
      return state;
  }
}

export type IState = {
  list: string,
  livro: string,
  autor: string,
  data: string,
  form: string,
  input: string,
}
export interface IAction {
  type: 'SETFULLFORM' | 'SETEMPTYLIVRO' | 'SETNOCONNECTION' | 'SETEMPTYAUTOR' | 'SETEMPTYDATA' | 'SETCANTFOUND' | 'SETREMEMBER' | 'SETLISTZERO' | 'SETLISTFULL'
  payload?: string
}
interface IBookProvider {
  children: JSX.Element[] | JSX.Element;
}

interface ContextType {
  state: {
    list: string,
    livro: string,
    autor: string,
    data: string,
    form: string,
    input: string,
  }
}

const initialState: any = {
  list: 'list-container scaley-zero',
  livro: '',
  autor: '',
  data: '',
  form: 'form-container scalex-zero',
  input: ''
}

const BookContext = createContext<any>(initialState); 

const BookProvider = ({ children } : any ) => {

  const [state, dispatch] = useReducer(BookReducer, initialState);

  return (
        <BookContext.Provider value={[ state, dispatch]}>
        {children}
      </BookContext.Provider>
  );
};

export { BookContext, BookProvider }