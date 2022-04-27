import React, { useEffect, useContext} from 'react'
import './SearchContainer.css';
import axios from 'axios';
import { BookContext } from '../providers/BookProvider';
import { BookReducer } from '../BookReducer';

function SearchContainer() {

  const  { list, livro, autor, data, form, input } = useContext(BookContext);

  const handleChangeInput = (event: any) => {
    dispatch({ input: event.target.value });
  }


    useEffect(() =>{
        dispatch({ type: 'SETFULLFORM'});
      }, [form]);

    const handleInput = (event: any) => {
        handleChangeInput(event.target.value);
      }

      function getValues() {
        dispatch({ type: 'SETEMPTYLIVRO'})
        axios
        .get("http://localhost:5000/")
        .then((response) => {
          for(var i= 0; i < response.data.length; i++){
            var a = response.data[i].name.toUpperCase();
            var b = input.toUpperCase();
            if( a === b ){
              dispatch({ livro: b });
              dispatch({ autor: response.data[i].author});
              dispatch({ data: response.data[i].data});
            }
          } 
        })
        .catch(function (error) {
          if(error.request){
            dispatch({ type: 'SETNOCONNECTION'})
            dispatch({ type: 'SETEMPTYAUTOR'}) 
            dispatch({ type: 'SETEMPTYDATA'}) 
          }
        })
        if(input === "")  {
          dispatch({ type: 'SETREMBEMBER'})
          dispatch({ type: 'SETEMPTYAUTOR'}) 
          dispatch({ type: 'SETEMPTYDATA'}) 
          }
        if(input !== livro)  {
          dispatch({ type: 'SETCANTFOUND'})
          dispatch({ type: 'SETEMPTYAUTOR'}) 
          dispatch({ type: 'SETEMPTYDATA'}) 
          }
        dispatch({ type: 'SETLISTZERO'});
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