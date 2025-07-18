import { useEffect, useState } from "react";
//Movie Object Type 
//Movie Details Sometime Object or Array or Text
const useFetch = <T>(  fetchFuction : ()=>Promise<T>,autoFetch=true  ) => {

    const [data,setData] = useState <T|null>(null)
    const[loading,SetLoading] = useState(false);
    const [error , setError] = useState <Error | null>(null);
    const fetchData = async() =>{
        try{
            SetLoading(true)
            setError (null)

            const result = await fetchFuction()
            setData(result);
        }
        catch(err){
            setError(  err instanceof Error ? err : new Error('An Error occured'));

    }finally{
            SetLoading(false)
         }
    }
    const reset =  () => {
        setData(null)
        SetLoading(false)
        setError(null)

}
useEffect(()=>{
if (autoFetch){
    fetchData()
}
}
,[])
return{data,loading,error , refech:fetchData , reset};
}


export default useFetch;    
