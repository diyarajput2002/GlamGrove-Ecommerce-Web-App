import './App.css';
import Landing from './components/Landing/Landing.js';
import Detail from './components/Detailpage/Detail.js';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import {Routes , Route , Navigate} from "react-router-dom";
import Productscontextprovider from './context/Productscontextprovider';
import CartContextProvider from './context/CartContextProvider';
import Login from './components/login/Login.js'
import Signup from './components/login/Signup'
import Cartshop from './components/Cart/cartshop/Cartshop';



function App() {
  return (
    <>
    <Productscontextprovider>
     <CartContextProvider>
     <Header />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cartshop' element={<Cartshop />}/>
      <Route path='/*' element={<Navigate to="/" />}/>
    </Routes>
    <Footer />
     </CartContextProvider>
    </Productscontextprovider>
    </>
  );
}

export default App;

