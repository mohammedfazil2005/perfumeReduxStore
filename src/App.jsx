import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import ProductView from "./pages/productViewPage/ProductView"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/view" element={<ProductView/>}/>
    </Routes>
    </>
  )
}

export default App
