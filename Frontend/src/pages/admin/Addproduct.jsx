import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/admin/Productinfo/ProductAction';
import { getcat } from '../../redux/admin/Categoryinfo/CatAction';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [images, setImages] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const data = useSelector(store => store.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = {
      title,
      images,
      description,
      price,
      category
    };
    dispatch(createProduct(products));
  };

  useEffect(() => {
    dispatch(getcat());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Product Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter product title"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              required
            />
          </div>

          {/* Multiple Image Upload */}
          <div className="mb-4">
          
            <input
              type="url"
              onChange={(e) => setImages(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              required
            >
              <option value="" disabled>Select a category</option>
              {data.cats.map((ele) => (
                <option key={ele.categoryName} value={ele.categoryName}>{ele.categoryName}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
