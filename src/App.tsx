import React, { useState } from 'react';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Products from './components/Products';
function App() {
  return (
    <div className="w-full relative">
      <Header/>
      <Catalog/>
      <Products/>
    </div>
  )
}

export default App
