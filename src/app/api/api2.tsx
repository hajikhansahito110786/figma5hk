//import Startup from "././startup";
//import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import {Retivedata} from "./datafetchfunction";
/*
let arr: obj[] = [
    {
        name: 'GFG User 1',
        role: 'Developer'
    },
    {
        name: 'GFG User 2',
        role: 'Designer'
    },
    {
        name: 'GFG User 3',
        role: 'Tester'
    }
];

 const arr123:number[] = [1,2,3,4,5,6,7,8];
res.map((res1: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => {
        return ( <div key={index} >{res1}</div> )       
     })

     res.map((obj: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; },i: Key | null | undefined)=>{


     res.map((obj,i)=>{
*/
interface Data{
    id:number
    name:string
   } 
  
export default async function Api2() {

    const fetchdata1=await Retivedata<Data[]>('https://simple-books-api.glitch.me/books')
   // const bookdata=await Retivedata<Data[]>('https://simple-books-api.glitch.me/books/4')
    //console.log(fetchdata1);
    //console.log(bookdata);
     //console.log(res);
   //const fetchdata=await fetch('https://simple-books-api.glitch.me/books');
   //const res=await fetchdata.json();
   //console.log(res);
   
  return (
    <div >



{
    
    fetchdata1.map((obj,i)=>{
        setInterval(()=>{
            
            
            
            
            //console.log('hello')
        
        },150000);
    // setInterval(()=>console.log('hello'),1000);
   return(
      
  <li key={i}>{obj.name}
  
  
  
  </li>
  
  )
  
   })
      
   // JSON.stringify(bookdata)
}
    </div>
  );
}
