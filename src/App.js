import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom" ;
import {Home} from "./components/Home" ; 
import {Products} from "./components/Product"
import {ProductDetails} from "./components/ProductDetails" ; 
import {Navbar} from "./components/Navbar" ;  

function App() {
  return (
    <div className="App">
      <Navbar/> 
      
     <Routes>
       <Route path = "/" element = {<Home/>} />
       <Route path = "/products" element = {<Products/>} />
       <Route path = "/products/:id" element = {<ProductDetails/>} />
     </Routes>
    </div>
  );
}

export default App;
