import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
    <h4>
        {product.name}
    </h4>
    <p>
        {product.price}
    </p>
    <div className='product-image'>
        <img src= {`${product.image}`} alt="" />
    </div>
    <p style = {{ backgroundColor : product.color === "red" ? 'red' : product.color === 'yellow' ? "yellow" : "black" , width : "20px" , height : "20px" , borderRadius : "100%" , margin : "0 auto" }}>   </p>
   
    </div>
  )
}

export default Product