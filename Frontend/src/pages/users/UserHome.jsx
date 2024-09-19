import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/admin/Productinfo/ProductAction'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch =useDispatch()
  const data = useSelector((store)=>store.pros)
  console.log(data);
  

  useEffect(()=>{
    dispatch(getProduct())
  },[])
  
  return (
    <div>
        {
          data.products.map((ele)=>(
            <Link to={`/user/product/${ele.id}`} key={ele.id}>
            <div className='bg-red-600 m-2'>
              <h3> title : {ele.title}</h3>
              <p>desc : {ele.description}</p>
              <img src={ele.image} alt={ele.title} />
              <h4>${ele.price}</h4>
              <p>category : {ele.category}</p>
            </div>
            </Link>
          ))
        }
    </div>
  )
}

export default Home