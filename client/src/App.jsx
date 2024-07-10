import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Sighin from "./pages/Sighin"
import Sighout from "./pages/Sighout"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sigh-in" element={<Sighin/>}/>
      <Route path="/sigh-out" element={<Sighout/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}
