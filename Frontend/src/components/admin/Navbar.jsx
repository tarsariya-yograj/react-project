import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAdmin, logoutAdmin } from "../../redux/admin/Admininfo/Action";
import img from '../../../imges/logo.png'
const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.admins);
  const admin = JSON.parse(localStorage.getItem("admin"));
  let adminn = useSelector((store) => store.admins);
  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}


          <Link to="/" className="text-white text-2xl font-bold">
            <img src={img} className="w-24 h-14" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/admin/productpage"
              className="text-white hover:text-gray-400"
            >
              Product Page
            </Link>
            <Link
              to="/admin/category"
              className="text-white hover:text-gray-400"
            >
              Category
            </Link>
            {adminn.admin.role === "ADMIN" ? (
              <Link
                to="/admin/addproduct"
                className="text-white hover:text-gray-400"
              >
                Addproduct
              </Link>
            ) : null}

            {data.isLogin || admin ? (
              <button
                onClick={() => dispatch(logoutAdmin())}
                className="text-red-700 hover:text-red-600 transition-colors duration-300 focus:outline-none"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/admin/login"
                className="text-white hover:text-gray-400"
              >
                Login
              </Link>
            )}
           
          </div>

          
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link to="/" className="block text-white hover:text-gray-400 p-2">
              Home
            </Link>
            <Link
              to="/admin/category"
              className="block text-white hover:text-gray-400 p-2"
            >
              Category
            </Link>
            <Link
              to="/admin/addproduct"
              className="block text-white hover:text-gray-400 p-2"
            >
              addproduct
            </Link>
            {data.isLogin || admin ? (
              <button
                onClick={() => dispatch(logoutAdmin())}
                className="text-red-700 hover:text-red-600 transition-colors duration-300 focus:outline-none"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/admin/login"
                className="block text-white hover:text-gray-400 p-2"
              >
                Login
              </Link>
            )}
            
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
