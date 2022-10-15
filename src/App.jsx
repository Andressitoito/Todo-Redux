import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from './components/auth/ProtectedRoutes/ProtectedRoutes'
import { Navbar } from './components/ui/Navbar'
import { AddTodo } from './pages'

// import { Home } from './pages'
// import MyHOCComponent from './pages/Home'
import Home from './pages/Home'

import { EditPage } from './pages/EditPage'
import { Profile } from './pages/Profile'
import React from 'react'

import './App.css'

const withImpuestos = (Component) => {

 return (config) => class extends React.Component {

  state = {
   sucursal: config.sucursal,
   pago: '$' + config.pago,
   impuesto: '$' + (config.pago * config.impuesto) + ' al ' + (config.impuesto * 100) + '%',
   ganacia: '$' + (config.pago - (config.pago * config.impuesto))
  }

  calcularImpuesto = (pago) => {
   this.setState({
    pago: '$' + pago,
    impuesto: '$' + (pago * config.impuesto) + ' al ' + (config.impuesto * 100) + '%',
    ganacia: '$' + (pago - (pago * config.impuesto))
   })
  }

  render() {
   return (
    <Component
     sucursal={this.state.sucursal}
     pago={this.state.pago}
     impuesto={this.state.impuesto}
     ganancia={this.state.ganacia}
     calcularImpuesto={this.calcularImpuesto}
    />
   )
  }
 }
}

function App(props) {

 console.log(props);

 const { sucursal, pago, impuesto, ganancia, calcularImpuesto } = props


 const [data, setData] = useState('DadsADS')


 useEffect(() => {

 }, [data])


 return (
  <div className="App">
   <Navbar />

   {
    data && <div className='div-especial'>{data}</div>
   }


   <h1>Impuesto Sucursal {sucursal}</h1>
   <input type='number' onChange={(e) => {
    calcularImpuesto(e.target.value)
   }} />

   <p>{'Pago: ' + pago}</p>
   <p>{'Impuesto: ' + impuesto}</p>
   <p>{'Ganancia: ' + ganancia}</p>


   <Routes>
    {/* Rutas publicas */}
    <Route path='/' element={<Home nombre='Leo'/>} />
    {/* <Route path='/' element={<MyHOCComponent />} /> */}
    <Route path='/add-todo' element={<AddTodo />} />
    <Route path='/edit-todo/:id' element={<EditPage />} />
    {/* Rutas privadas */}
    <Route element={<ProtectedRoutes />}>
     <Route path='/profile' element={<Profile />} />
    </Route>
    <Route />
   </Routes>
  </div>
 )
}

export default withImpuestos(App)({
 sucursal: 1,
 pago: 10,
 impuesto: 0.16,
 ganancia: 0
})










/* 
npm i react-icons --save
npm i react-hook-form
npm i @reduxjs/toolkit react-redux




*/