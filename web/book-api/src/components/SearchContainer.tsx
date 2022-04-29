import React, { useEffect, useState, useContext } from 'react'
import './SearchContainer.css';
import axios from 'axios';
import UserContext from '../context';

function SearchContainer() {

  const { setState, state } = useContext(UserContext)

  const [list, setList] = useState<string>('list-container scaley-zero');
  const [livro, setLivro] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [form, setForm] = useState<string>('form-container scalex-zero');
  const [input, setInput] = useState<string>('');

  function handleChangeList(){
    setState({
      ...state,
      list: list,
    })
  }

  function handleChangeLivro(){
    setState({
      ...state,
      livro: livro,
    })
  }

  function handleChangeAutor(){
    setState({
      ...state,
      autor: autor,
    })
  }

  function handleChangeData(){
    setState({
      ...state,
      data: data,
    })
  }

   function handleChangeForm(){
    setState({
      ...state,
      form: form,
    })
  }

  const handleChangeInput = (event: any) => {
    setInput(event.target.value);
  }
    useEffect(() =>{
        setForm("form-container scalex-full");
      }, [form]);

    const handleInput = (event: any) => {
        handleChangeInput(event.target.value);
      }

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