import React from 'react'
import { useProduct} from '../hooks/useProduct'
import { ProductForm } from '../component/ProductForm';

export const Add = () => {
    const {handleAdd} = useProduct();
  return (
    <div className="container">
        <h1>Add</h1>
        <ProductForm onSubmit={handleAdd}/>
    </div>
  )
}
