 import {Link} from "react-router-dom" ; 

export const Navbar =()=>{
    return (
        <nav>
           <div style = {{
               display : "flex", 
               gap : "10px", 
               justifyContent : "space-evenly" ,  
           }}>
            <Link to = "/">Home</Link>
            <Link to = "/products">Product</Link>
            <Link to = "/products/:id">ProductDetails</Link>
           
           </div>
        </nav>
    )
}