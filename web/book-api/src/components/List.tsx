import React, { useEffect } from 'react';
import { BookContext } from '../providers/BookProvider';
import "./List.css";

function List() {

  const { list, livro, autor, data, form, input } = React.useContext(BookContext);
  const [listValue, setList] = list;
  const [livroValue, setLivro] = livro;
  const [autorValue, setAutor] = autor;
  const [dataValue, setData] = data;
  const [formValue, setForm] = form;
  const [inputValue, setInput] = input;

    useEffect(() =>{
        setList("list-container scaley-full");
      }, [list]);

  return (
    <div className={list}>
        <h3 className='mt-3'>Informações</h3>
        <h1 className='book-name'>{livro}</h1>
        <p>{autor}</p>
        <p>{data}</p>
    </div>
  )
}

export default List