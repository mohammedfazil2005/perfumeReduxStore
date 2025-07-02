import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import ProductView from "./pages/productViewPage/ProductView"
import CartPage from "./pages/cartPage/CartPage"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
    
    <Toaster/>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/view" element={<ProductView/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
