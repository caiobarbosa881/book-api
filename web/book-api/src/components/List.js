import React, { useEffect, useState } from 'react';
import "./List.css";

function List() {

  const [list, setList] = useState('list-container scaley-zero');
  const [livro, setLivro] = useState('');
  const [autor, setAutor] = useState('');
  const [data, setData] = useState('');
  const [form, setForm] = useState('form-container scalex-zero');
  const [input, setInput] = useState('');

    useEffect(() =>{
        setList('list-container scalex-full')
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