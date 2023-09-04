import axios from "axios";
import BASE_URL,{urls} from "../../../config";


export const AddPassword = async()=>{
    const obj = {
        password: 'sarath',
        title: 'testing'
    }
    try{
        const config= {
            url: BASE_URL+urls.ADD_PASSWORD,
            method: 'post',
            data : obj
        }
  
       const response = await axios(config)
       return response.data
    }catch(e){
        if(e.message === 'Request failed with status code 404'){
            throw new Error(e.message)
        }else{
            throw new Error(e.message)
        }
    }
}
