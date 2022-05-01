interface IArticle {
    list: string
    livro: string
    autor: string
    data: string
    form: string
    input: string
  }
  
  type ArticleState = {
    articles: IArticle
  }
  
  type ArticleAction = {
    type: string
    article: IArticle
  }
  
  type DispatchType = (args: ArticleAction) => ArticleAction