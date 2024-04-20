import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Slider from './Components/Slider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Store from './Components/Store';
import CartSidebar from './Components/CartSidebar';
import ShowClothesWomen from './Components/ShowClothesWomen';
import ShowClothesMen from './Components/ShowClothesMen';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<> <Navbar /> <Slider /> <Homepage /> </>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/men" element={<ShowClothesMen />} />
          <Route path="/women" element={<ShowClothesWomen />} />
          <Route path="/store" element={<Store/>} />
          <Route path="/cartsidebar" element={<CartSidebar />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
