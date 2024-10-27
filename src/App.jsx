
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CardContainer from './Components/CardContainer/CardContainer'
import Navbar from './Components/Heading/Navbar'
function App() {
  

  return (
    <div className='max-w-6xl mx-auto'>
      
      
      <Navbar></Navbar>
      <div className='flex font-bold'>
      <AllProducts></AllProducts>
      <CardContainer></CardContainer>
      </div>
      
    </div>
  )
}

export default App
