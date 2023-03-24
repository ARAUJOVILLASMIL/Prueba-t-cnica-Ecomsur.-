import React from 'react'
import { PageProduct } from './Component/PageProduct'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ProductDetail } from './Component/ProductDetail'
import { Header } from './Component/Header'
import image from './assets/carrito-de-compras.png'

const App = () => {
  return (
    <>
    <Header image={image} />
      <Routes>
        <Route
        path="/"
        element={<PageProduct/>} />
        <Route
        path="detail"
        element={<ProductDetail/>}
        />
      </Routes>
    </>
  )
}

export default App
