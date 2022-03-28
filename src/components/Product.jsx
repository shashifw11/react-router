    import {useState, useEffect} from "react" ; 
    import {Link} from "react-router-dom" ; 
    import axios from "axios" ; 

 export const Products =()=>{
        
       const [list , setList] = useState();
              //console.log(list) ; 
        
         useEffect(()=>{
             axios.get("http://localhost:3000/Details").then(({data})=>{ 
                      // console.log(data) ; 
                       setList([...data])
                  })
         },[]) 
          return (
              <div style = {{
                display : "flex" ,
                  flexDirection : "column" ,  
            }} >
                  {list.map((e)=>(
                      <Link to = {`/products/${e.id}`} key = {e.id}>
                          {e.id} .{e.name}- {e.price}
                          </Link>
                  ))}
              </div>
          
          )

  }