export const  Retivedata=async<T>(url:string):Promise<T>=>{

    const fetchdata=await fetch(url);
    const res=await fetchdata.json();
    

return res;


}