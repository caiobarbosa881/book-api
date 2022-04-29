import React, { useEffect, useState, useContext } from 'react';
import "./List.css";
import UserContext from '../context';

function List() {

  const { setState, state } = useContext(UserContext)
  const [list, setList] = useState<string>('list-container scaley-zero');
  const [livro, setLivro] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [form, setForm] = useState<string>('form-container scalex-zero');
  const [input, setInput] = useState<string>('');


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