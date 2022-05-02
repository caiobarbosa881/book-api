import React, { useEffect, useState } from 'react'
import './SearchContainer.css';
import axios from 'axios';

function SearchContainer() {

  const [list, setList] = useState("list-container scalex-zero");
  const [livro, setLivro] = useState("");
  const [autor, setAutor] = useState("");
  const [data, setData] = useState("");
  const [form, setForm] = useState("form-container scalex-zero");
  const [input, setInput] = useState("");

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  }

  useEffect(() =>{
    setList('list-container scalex-full')
  }, [list]);

    useEffect(() =>{
        setForm("form-container scalex-full");
      }, [form]);

      function getValues() {
        setLivro("");
        axios
        .get("http://localhost:5000/")
        .then((response) => {
          for(var i= 0; i < response.data.length; i++){
            var a = response.data[i].name.toUpperCase();
            var b = input.toUpperCase();
            if( a === b ){
              setLivro(b)
              setAutor(response.data[i].author);
              setData(response.data[i].data);
            }
          } 
        })
        .catch(function (error) {
          if(error.request){
            setLivro("Infelizmente não há conexão com o sistema de livros no momento");
            setAutor("");
            setData("");
          }
        })
        if(input === "")  {
          setLivro("Lembre-se de digitar o nome abaixo");
          setAutor("");
          setData("");
          }
        if(input !== livro)  {
          setLivro("Nenhum Livro foi Encontrado");
          setAutor("");
          setData("");
          }
        setList("list-container scalex-zero");
        setForm("form-container scalex-zero");
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
          <input onChange={handleChangeInput} id="inputName"></input>
          <button type="button" onClick={getValues} className="btn mt-3 request-button">Consultar</button>
      </div>
    </>
  )
}

export default SearchContainer