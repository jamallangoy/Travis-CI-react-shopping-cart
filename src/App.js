import React from 'react';
import { api } from './api';
// import { api } from './api';
// import axios from 'axios';
// import { Accordion, Card, Button, Row, Col, Image, Container } from 'react-bootstrap'
import './App.css';

function App() {
  const { useState } = React;
  const url = 'http://localhost:1337/products'
  const [products, setProducts] = useState([url]);
  const [value, setValue] = useState('');

  const fetchData = async (e) => {
    e.preventDefault();
    const result =  await fetch('http://localhost:1337/products');
    const json = await result.json()
    setProducts(json)
       
   
      // api.fetchProducts(value).then((persistedItem) => {
       
      // })
    }

  const addProducts = products.map((item, i) =>{
      if (item.id === (i + 1))
      
      return(
        <>
          <li>
          <button
            key={item.id}
          >{item.name} : {item.instock}</button>
          </li>
        </>
      )
    })


  
 
  return(
    <>
    <div className='container'>
      <h1>Fetch From StrapiDB</h1>

      
      <form onSubmit={fetchData}>
        <input
          className='input'
          value={value}
          placeholder={url}
          onChange={e => setValue(e.target.value)}
        ></input>
        <button
          className='btn btn-primary'
          onClick={fetchData}
        >Submit</button>
      </form>
      <label style={{fontSize:"1.5rem"}}> Products </label>
      <ul
        key='product'
      >{addProducts}</ul>
    </div>

    </>
  )

}


export default App;
