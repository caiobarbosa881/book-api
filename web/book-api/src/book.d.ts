export interface IBook {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
  export type BookContextType = {
    book: IBook[];
    saveBook: (book: IBook) => void;
    updateBook: (id: number) => void;
  };