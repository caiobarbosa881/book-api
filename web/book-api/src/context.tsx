import React, { createContext, useState } from 'react';

type BookType = {
    list: string;
    livro: string;
    autor: string;
    data: string;
    form: string;
    input: string;
}

type PropsUserContext = {
  state: BookType;
  setState: React.Dispatch<React.SetStateAction<BookType>>;
}

const initialState = {
  state: {
     list: 'list-container scaley-zero',
     livro: '',
     autor: '',
     data: '',
     form: 'form-container scalex-zero',
     input: '',
  },
  setState: () => {},
}

const UserContext = createContext<PropsUserContext>(initialState);

const UserContextProvider: React.FC<any> = ({ children }) => {
    const [state, setState] = useState(initialState)
    return (
        <UserContextProvider
        value={{ 
            state,
            setState,
        }}
        >
            {children}
        </UserContextProvider>
    );
};

export { UserContextProvider};
export default UserContext;