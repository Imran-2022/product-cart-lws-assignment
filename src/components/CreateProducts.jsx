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
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleAddProduct}>
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="name">Product Name</label>
            <input name='product_name' value={product_name} onChange={handleChange} className="addProductInput" id="lws-inputName" type="text" required />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <input name='product_category' value={product_category} onChange={handleChange} className="addProductInput" id="lws-inputCategory" type="text" required />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input name='product_image_url' value={product_image_url} onChange={handleChange} className="addProductInput" id="lws-inputImage" type="text" required />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input name='product_price' value={product_price} onChange={handleChange} className="addProductInput" type="number" id="lws-inputPrice" required />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="quantity">Quantity</label>
              <input name='product_quantity' value={product_quantity} onChange={handleChange} className="addProductInput" type="number" id="lws-inputQuantity" required />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
};

export default CreateProducts;