import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const isLoginn = useSelector((store) => store.admins.isLogin);

  const localAdmin = JSON.parse(localStorage.getItem("admin"));

  if (isLoginn || localAdmin !== null) {
    console.log("User is logged in");
    return children;
  } else {
    console.log("User is not logged in");
    return <Navigate to="/admin/login" />;
  }
};
export default PrivetRoute;




// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const PrivetRoute = ({ children }) => {
//   // Fetching login status from Redux store
//   const isLogin = useSelector((store) => store.admins.isLogin);

//   // Fetching login data from localStorage
//   const localAdmin = JSON.parse(localStorage.getItem("admin"));

//   // If user is logged in either from Redux state or localStorage
//   if (isLogin || localAdmin !== null) {
//     console.log("User is logged in");
//     return children;
//   } else {
//     console.log("User is not logged in");
//     // Redirect to login page if not logged in
//     return <Navigate to="/admin/login" />;
//   }
// };

// export default PrivetRoute;