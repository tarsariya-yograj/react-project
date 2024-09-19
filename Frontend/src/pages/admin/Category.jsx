

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCat, getcat, updateCat, deleteCat } from "../../redux/admin/Categoryinfo/CatAction";

const AddCategoryForm = () => {
  let dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cato = { categoryName };

    if (editing) {
      dispatch(updateCat(currentCategoryId, cato)); // Handle update
      setEditing(false);
      setCurrentCategoryId(null);
    } else {
      dispatch(createCat(cato)); // Handle create
    }

    setCategoryName('');
  };

  const handleEdit = (cat) => {
    setEditing(true);
    setCategoryName(cat.categoryName);
    setCurrentCategoryId(cat.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteCat(id));
  };

  const data = useSelector((store) => store.category);

  useEffect(() => {
    dispatch(getcat());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full my-6 max-w-md">
          <h2 className="text-2xl font-bold mb-5 text-center">
            {editing ? "Update Category" : "Add Category"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-1">
              <label className="block text-gray-700 font-medium my-2">
                Category Name
              </label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter category name"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg transition duration-300 ${editing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}
            >
              {editing ? "Update Category" : "Add Category"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 shadow-sm max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">Category List</h3>
        {data.cats.map((ele) => (
          <div key={ele.id} className="flex shadow-sm justify-between items-center bg-gray-100 p-4 rounded-lg mb-2">
            <span className="text-gray-700">{ele.categoryName}</span>
            <div className="space-x-4">
              <button
                onClick={() => handleEdit(ele)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ele.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddCategoryForm;
