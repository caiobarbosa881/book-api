import { IAction, IState } from "./providers/BookProvider";

export const BookReducer = (state: IState, action: IAction) => {
  console.log(state, action);
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