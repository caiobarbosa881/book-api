import React, { useEffect, useContext } from 'react';
import { BookContext } from '../providers/BookProvider';
import "./List.css";

function List() {

  const { state: { list, livro, autor, data, form, input }, dispatch } = useContext(BookContext);
  
    useEffect(() =>{
        dispatch({ type: 'SETLISTFULL'})
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