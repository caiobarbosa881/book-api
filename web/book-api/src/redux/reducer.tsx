import { STATUS_CODES } from "http"
import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  articles: [
    {
      list:"",
      livro:"",
      autor:"",
      data:"",
      form:"form-container scalex-zero",
      input:"",
    }
  ],
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
  ): ArticleState => {
    switch (action.type) {
      case actionTypes.SET_EMPTY_LIVRO:
        return {
          ...state,
          
        }
      case actionTypes.REMOVE_ARTICLE:
        const updatedArticles: IArticle[] = state.articles.filter(
          article => article.id !== action.article.id
        )
        return {
          ...state,
          articles: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer