import React from 'react'
import { useProduct} from '../hooks/useProduct'
import { ProductForm } from '../component/ProductForm';

export const Edit = () => {
    const {handleEdit,product} = useProduct();
  return (
    <div className="container">
        <h1>Edit</h1>
        <ProductForm onSubmit={handleEdit} product={product}/>
    </div>
  )
}
