import React from 'react';

const ProductContainer = ({dt}) => {
  const {product_id, product_name, product_category, product_image_url, product_price, product_quantity } = dt;

    return (
        <div class="lws-productCard">
          <img class="lws-productImage" src={product_image_url} alt="product" />
          <div class="p-4 space-y-2">
            <h4 class="lws-productName">{product_name}</h4>
            <p class="lws-productCategory">{product_category}</p>
            <div class="flex items-center justify-between pb-2">
              <p class="productPrice">BDT <span class="lws-price">{product_price}</span></p>
              <p class="productQuantity">QTY <span class="lws-quantity">{product_quantity}</span></p>
            </div>
            <button class="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
    
    );
};

export default ProductContainer;