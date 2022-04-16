import React from 'react'
import './CadForm.css'

function CadForm() {
  return (
    <>
    <div className='register-container'>
        <h3 className='mt-3'>Registrar Livros</h3>
        <input className="form-control request-input w-75 mt-3" type="text" placeholder="Insira o Nome do Livro"/>
        <input className="form-control request-input w-75 mt-3" type="text" placeholder="Insira o Autor"/>
        <input className="form-control request-input w-75 mt-3" type="number" placeholder="Insira o número de Páginas"/>
        <button type="button" className="btn btn-primary mt-3 request-button">Enviar</button>
    </div>

    <div className='form-container'>
        <h3 className='mt-3'>Consultar Livros</h3>
        <input className="form-control request-input w-75 mt-3" type="text" placeholder="Insira o Nome do Livro para consultar"/>
        <button type="button" className="btn btn-primary mt-3 request-button">Consultar</button>
    </div>
    </>  
  )
}

export default CadForm