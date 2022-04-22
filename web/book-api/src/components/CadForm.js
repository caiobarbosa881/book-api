import React from 'react'
import './CadForm.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function CadForm() {

  const [livro, setLivro] = useState();
  const [form, setForm] = useState("form-container scalex-zero");
  const [input, setInput] = useState();
  const inputValue = document.getElementById("inputName");

useEffect(() =>{
  setForm("form-container scalex-full")
}, [form]);

  const handleInput = event => {
    setInput(event.target.value);
    console.log(event.target.value)
  }

  function getValues() {
    axios
    .get("http://localhost:5000/")
    .then((response) => {
      console.log(response.data[0].name)
      for(var i= 0; i < response.data.length; i++){
        if(response.data[i].name === inputValue.value){
          setLivro(inputValue.value);
        }
      }
    })
  }

  return (
    <>
    <div className='register-container'>
        <h3 className='mt-3'>Registrar Livros</h3>
        <h1>{livro}</h1>
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