
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>      
        <Route path='/' exat element={<Home/>}></Route>     
    </Routes>
    <Footer />
    </>
  );
}

export default App;
