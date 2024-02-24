import './App.css'
import { 
  Home,
  ContactMe
 } from './Views/index';
import { Routes, Route } from "react-router-dom";



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactMe" element={<ContactMe />} />

    </Routes>
  )
}

export default App
