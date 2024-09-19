import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../redux/admin/Productinfo/ProductAction";
import { getcat } from "../../redux/admin/Categoryinfo/CatAction";

const Home = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState('');
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState(0);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.pros);
  const catss = useSelector((store) => store.category);

  const handleClose = () => {
    const prodata = { title, image, description, price, category, id };
    dispatch(updateProduct(prodata));
    setIsUpdateFormVisible(false);
  };

  const handleShow = (ele) => {
    setTitle(ele.title);
    setImage(ele.image)
    setDescription(ele.description);
    setPrice(ele.price);
    setCategory(ele.category);
    setId(ele.id);
    setImage(null);
    setIsUpdateFormVisible(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getcat());
  }, [dispatch]);

  return (
    <>
      {isUpdateFormVisible && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Update Product</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              type="url"
              placeholder="enter url"
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled>Select Category</option>
              {catss.cats.map((ele) => (
                <option key={ele.id} value={ele.id}>
                  {ele.categoryName}
                </option>
              ))}
            </select>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition duration-200"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setIsUpdateFormVisible(false)}
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto space-y-6">
          {data?.products?.map((ele) => (
            <div
              key={ele.id}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between space-x-6 transition-transform transform hover:scale-105"
            >
              <div className="flex w-1/2 justify-around">
                <img
                  src={ele.images}
                  alt={ele.title}
                  className="w-36 h-36 object-cover rounded-lg border border-gray-300 shadow-sm"
                />
                <div>
                  <h1 className="text-xl font-semibold mb-2 text-gray-800">{ele.title}</h1>
                  <p className="text-gray-600 mb-4">{ele.description}</p>
                  <p className="text-lg font-medium text-green-600 mb-2">Price: ${ele.price}</p>
                  <p className="text-sm text-gray-500">{ele.category}</p>
                </div>
              </div>
              <div className="w-1/6 flex justify-evenly">
                <button
                  onClick={() => handleDelete(ele.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-200"
                >
                  DELETE
                </button>
                <button
                  onClick={() => handleShow(ele)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
                >
                  UPDATE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
