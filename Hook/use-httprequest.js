import {useCallback} from "react";
function useHttp(){
let response;
const fetchData = async (Obj)=>{
const dataBaseUrl  = fetch(`https://react-hook-2ac26-default-rtdb.firebaseio.com/Task.json`,Obj)
 response = await dataBaseUrl
return response
}
return fetchData

}

export default useHttp