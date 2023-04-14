import React from 'react'
// import products from '../data'
import Product from './Product.jsx'

const Products = ({from , to ,products,sortByPrice , colors}) => {
        
    products = products.filter((p) => {
        if(colors.length) {
            let isColorThere =  colors.includes(p.color);

            if(isColorThere) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    })

    products = products.filter(p => {
        if(from && to) {   
            if(p.price >= from && p.price <= to) {
                return true;  
            }
        } else {
            return true;
        }
    })


    products = products.sort((p1,p2) => {
        if(sortByPrice && sortByPrice === 'low-to-high') {
           if(Number(p1.price) < Number(p2.price)) {
                return -1
           } 
           return 0;
        } else if(sortByPrice && sortByPrice === 'high-to-low') {
            if(Number(p1.price) > Number(p2.price)) {
                return -1
           } 
           return 0;
        }
    })


  return (
    <>
        <h1>Products</h1>
        <p>Showing {products.length} of products</p>
    <div className='products'>
    {
        products.map(product => <Product key = {product.id} product = {product} />)
    }
    </div>
    </>
  )
}

export default Products