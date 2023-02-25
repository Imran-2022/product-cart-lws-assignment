import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/product/actions';

const CreateProducts = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    product_id: '',
    product_name: '',
    product_category: '',
    product_image_url: '',
    product_price: '',
    product_quantity: '',
  })
  const handleChange = (e) => {
    setProduct((preValue) => ({ ...preValue, [e.target.name]: e.target.value }))
  }
  const handleAddProduct = (e) => {
    const dt = { ...product, product_id: Math.random().toString(16).slice(2) }
    e.preventDefault();
    dispatch(addProduct(dt))
  }

  const { product_name, product_category, product_image_url, product_price, product_quantity } = product;
  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div class="formContainer">
        <h4 class="formTitle">Add New Product</h4>
        <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleAddProduct}>
          {/* <!-- product name --> */}
          <div class="space-y-2">
            <label for="name">Product Name</label>
            <input name='product_name' value={product_name} onChange={handleChange} class="addProductInput" id="lws-inputName" type="text" required />
          </div>
          {/* <!-- product category --> */}
          <div class="space-y-2">
            <label for="category">Category</label>
            <input name='product_category' value={product_category} onChange={handleChange} class="addProductInput" id="lws-inputCategory" type="text" required />
          </div>
          {/* <!-- product image url --> */}
          <div class="space-y-2">
            <label for="image">Image Url</label>
            <input name='product_image_url' value={product_image_url} onChange={handleChange} class="addProductInput" id="lws-inputImage" type="text" required />
          </div>
          {/* <!-- price & quantity container --> */}
          <div class="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div class="space-y-2">
              <label for="price">Price</label>
              <input name='product_price' value={product_price} onChange={handleChange} class="addProductInput" type="number" id="lws-inputPrice" required />
            </div>
            {/* <!-- quantity --> */}
            <div class="space-y-2">
              <label for="quantity">Quantity</label>
              <input name='product_quantity' value={product_quantity} onChange={handleChange} class="addProductInput" type="number" id="lws-inputQuantity" required />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
};

export default CreateProducts;