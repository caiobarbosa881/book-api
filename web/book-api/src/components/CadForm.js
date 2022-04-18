import React from 'react'
import './CadForm.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function CadForm() {

  const [livro, setLivro] = useState("");
  const [form, setForm] = useState("form-container scale-zero");

useEffect(() =>{
  setForm("form-container scale-full")
}, [form]);


  function getValues() {
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      setLivro(response.data);
    });
}

  return (
    <>
    <div className='register-container'>
        <h3 className='mt-3'>Registrar Livros</h3>
        <h1>{livro}</h1>
    </div>

    <div className={form}>
        <h3 className='mt-3'>Consultar Livros</h3>
        <button type="button" onClick={getValues} className="btn btn-primary mt-3 request-button">Consultar</button>
    </div>
    </>  
  )
}

export default CadForm