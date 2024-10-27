
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CardContainer from './Components/CardContainer/CardContainer'
import Navbar from './Components/Heading/Navbar'
function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart1"
  })


  const handleIsActiveState = state => {
    if(state === "cart"){
      setIsActive({
        cart: true,
        status: "cart"
      })

    }
    else{
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }
  console.log(isActive)

  return (
    <div className='max-w-6xl mx-auto'>
      
      
      <Navbar></Navbar>
      <div className='flex font-bold'>
      <AllProducts></AllProducts>
      <CardContainer
       handleIsActiveState={handleIsActiveState}
       isActive={isActive}
       ></CardContainer>
      </div>
      
    </div>
  )
}

export default App
