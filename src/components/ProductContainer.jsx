import React from 'react';

const ProductContainer = ({ dt }) => {
  const { product_id, product_name, product_category, product_image_url, product_price, product_quantity } = dt;

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={product_image_url} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{product_name}</h4>
        <p className="lws-productCategory">{product_category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">BDT <span className="lws-price">{product_price}</span></p>
          <p className="productQuantity">QTY <span className="lws-quantity">{product_quantity}</span></p>
        </div>
        <button className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>

  );
};

export default ProductContainer;