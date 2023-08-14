
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import CartDetails from './Pages/Home/CartDetails';

function App() {
  return (
    <>
    <ToastContainer position="top-center" autoClose={1000} />
    <Header/>
    <Routes>      
        <Route path='/' exat element={<Home/>}></Route>
        <Route path='/cart-details/:id' exat element={<CartDetails />}></Route>       
    </Routes>
    <Footer />
    </>
  );
}

export default App;
