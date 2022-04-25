import React from 'react'
import './CadForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CadForm() {

  const [livro, setLivro] = useState();
  const [autor, setAutor] = useState();
  const [data, setData] = useState();
  const [form, setForm] = useState("form-container scalex-zero");
  const [input, setInput] = useState();
  const inputValue = document.getElementById("inputName");
  const [list, setList] = useState("list-container scalex-zero");

useEffect(() =>{
  setForm("form-container scalex-full");
}, [form]);

useEffect(() =>{
  setList("list-container scalex-full");
}, [list]);

  const handleInput = event => {
    setInput(event.target.value);
  }
  
  function getValues() {
    setLivro()
    axios
    .get("http://localhost:5000/")
    .then((response) => {
      for(var i= 0; i < response.data.length; i++){
        var a = response.data[i].name.toUpperCase();
        var b = inputValue.value.toUpperCase();
        console.log(b);
        if( a === b ){
          setLivro(b);
          setAutor(response.data[i].author);
          setData(response.data[i].data);
        }
      } 
    })
    if(inputValue.value !== livro) {
      setLivro("Nenhum livro foi encontrado")
      setAutor("")
      setData("")
      }
    setList("list-container scalex-zero");
  }

  return (
    <>
    <div className={list}>
        <h3 className='mt-3'>Informações</h3>
        <h1 className='book-name'>{livro}</h1>
        <p>{autor}</p>
        <p>{data}</p>
    </div>

    <div className={form}>
        <h3 className='mt-3'>Consultar Livros</h3>
        <input onChange={handleInput} id="inputName"></input>
        <button type="button" onClick={getValues} className="btn btn-primary mt-3 request-button">Consultar</button>
    </div>
    </>  
  )
}

export default CadForm