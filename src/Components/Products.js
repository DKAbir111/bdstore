import React from 'react';


const Products = ({ products }) => {
  // You can use the products array here
  console.log(products);

  // Example: Render products
  return (
    <div className="products">
      {products.map(product => (
  
         <article className="product">
         <img src={product.image} alt="" className='product__img'/>
         <div className="product__details">
           <h4 className="product__title">{product.title}</h4>
           <div className="golden">
           <p>Price: $ {product.price}</p>
           <p>Rating: {product.rating.rate}/5 ({product.rating.count} reviews)</p>
           </div>
           <p className="product__desc">Description: {product.description}</p>
           <button className="product__btn btn">Add to cart</button>
         </div>
       </article>
       
      ))}
    </div>
  );
};

export default Products;
