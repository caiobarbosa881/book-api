import * as actionTypes from "./actionTypes"

export function setEmptyLivro(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.SET_EMPTY_LIVRO,
    article,
  }

  return simulateHttpRequest(action)
}

export function setEmptyData(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.SET_EMPTY_DATA,
      article,
    }
  
    return simulateHttpRequest(action)
  }

export function setEmptyAutor(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.SET_EMPTY_AUTOR,
      article,
    }
  
    return simulateHttpRequest(action)
  }

export function setNoConnection(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.SET_NO_CONNECTION,
      article,
    }
  
    return simulateHttpRequest(action)
  }

export function setCantFound(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.SET_CANT_FOUND,
      article,
    }
  
    return simulateHttpRequest(action)
  }

export function setListZero(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.SET_LIST_ZERO,
      article,
    }
  
    return simulateHttpRequest(action)
  }

export function setListFUll(article: IArticle) {
    const action: ArticleAction = {
      type: actionTypes.SET_LIST_FULL,
      article,
    }
  
    return simulateHttpRequest(action)
  }



export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}