import './App.css'
import Navbar from '../src/components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../src/components/footer'

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
