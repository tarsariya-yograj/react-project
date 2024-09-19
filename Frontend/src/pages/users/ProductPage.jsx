// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../../redux/admin/Productinfo/ProductAction";
// import { useParams } from "react-router-dom";

// const ProductPage = () => {
//   const dispatch = useDispatch();

//   const [product, setPdroduct] = useState({});

//   let { id } = useParams();
//   console.log(id);

//   let data = useSelector((store) => store.pros);
//   setPdroduct(data);

//   useEffect((id) => {
//     dispatch(getProduct(id));
//   }, []);

//   return (
//     <div>
//       {/* {data.products.map((product) => (
//         <h1 key={product._id}>{product.title}</h1>
//       ))} */}

//       <h1>
//         <p>{data.title}</p>
//       </h1>
//     </div>
//   );
// };

// export default ProductPage;













import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getsingleProduct } from "../../redux/admin/Productinfo/ProductAction";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
//   const [product, setProduct] = useState({});

  let { id } = useParams();
  console.log(id);
  

  // Select product data from the store
//   const data = useSelector((store) => store.pros.products.find((p) => p.id === id) || {});

const {product}=useSelector(store=>store.pros)
  useEffect(() => {
    dispatch(getsingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
    </div>
  );
};

export default ProductPage;
