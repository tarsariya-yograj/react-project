import './App.css'
import Navbar from '../src/components/admin/Navbar'
// import UserNavbar from './components/users/UserNavbar'
import Allroute from '../src/routes/admin/Allroute'


function App() {

  return (
   <>
      <Navbar/>
      {/* <UserNavbar/> */}
      <Allroute/>
   </>
  )
}

export default App
