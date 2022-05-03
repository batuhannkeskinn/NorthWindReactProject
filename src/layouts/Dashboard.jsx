import React from 'react'
import Category from './Category'
import ProductList from '../pages/ProductList';
import Navi from './Navi'
export default function Dashboard() {
  return (
    <div>
      
      <Navi/>
      <Category/>
      <ProductList/>
    </div>
  )
}
