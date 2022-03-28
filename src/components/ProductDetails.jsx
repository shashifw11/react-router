import {useParams} from "react-router-dom" ; 
import {useEffect,useState} from "react" ; 
import {axios} from "axios" ; 
export const ProductDetails = () =>{
    const {id} = useParams() ;  
     const [detail,setDetail] = useState() ; 
      useEffect(()=>{
         axios.get(`http://localhost:3000/Details/${id}`).then((data)=>{
              //console.log(data);
               setDetail([...data]);
         })
      },[])
     
     return (
         <div>
             {detail.map((e)=>
               <div>
                   
               </div>
             )}
         </div>
     )
}