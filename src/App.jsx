
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>

      <div className='max-w-[1440px] mx-auto p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
