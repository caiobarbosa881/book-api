import React, { useState } from 'react';



export const BookContext = React.createContext<any>({}); 

export const BookProvider = (props: any) => {

  const [list, setList] = useState<String>("list-container scaley-zero");
  const [livro, setLivro] = useState<String>("");
  const [autor, setAutor] = useState<String>("");
  const [data, setData] = useState<String>("");
  const [form, setForm] = useState<String>("form-container scalex-zero");
  const [input, setInput] = useState<String>("");

  return (
      <BookContext.Provider value={{ list: [list, setList], livro: [livro, setLivro], autor: [autor, setAutor], data: [data, setData], form: [form, setForm], input: [input, setInput] }}>
          {props.children}
      </BookContext.Provider>
  );
};