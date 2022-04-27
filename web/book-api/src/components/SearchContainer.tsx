import React, { useEffect } from 'react'
import './SearchContainer.css';
import axios from 'axios';
import { BookContext } from '../providers/BookProvider';

function SearchContainer() {

  const { list, livro, autor, data, form, input } = React.useContext(BookContext);
  const [listValue, setList] = list;
  const [livroValue, setLivro] = livro;
  const [autorValue, setAutor] = autor;
  const [dataValue, setData] = data;
  const [formValue, setForm] = form;
  const [inputValue, setInput] = input;

    useEffect(() =>{
        setForm("form-container scalex-full");
      }, [form]);

    const handleInput = (event: any) => {
        setInput(event.target.value);
      }

      function getValues() {
        setLivro("")
        axios
        .get("http://localhost:5000/")
        .then((response) => {
          for(var i= 0; i < response.data.length; i++){
            var a = response.data[i].name.toUpperCase();
            var b = input.toUpperCase();
            if( a === b ){
              setLivro(b);
              setAutor(response.data[i].author);
              setData(response.data[i].data);
            }
          } 
        })
        .catch(function (error) {
          if(error.request){
            setLivro("Infelizmente não há conexão com o sistema de livros no momento")
            setAutor("")
            setData("")
          }
        })
        if(input === "")  {
          setLivro("Lembre-se de digitar o nome abaixo")
          setAutor("")
          setData("")
          }
        if(input !== livro)  {
          setLivro("Nenhum livro foi encontrado")
          setAutor("")
          setData("")
          }
        setList("list-container scaley-zero");
      }

  return (
    <div className={form}>
        <h3 className='mt-3'>Consultar Livros</h3>
        <input onChange={handleInput} id="inputName"></input>
        <button type="button" onClick={getValues} className="btn mt-3 request-button">Consultar</button>
    </div>
  )
}

export default SearchContainer