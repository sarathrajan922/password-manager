import axios from "axios";
import BASE_URL,{urls} from "../../../config";


export const AddPassword = async(data)=>{
   
    try{
        const config= {
            url: BASE_URL+urls.ADD_PASSWORD,
            method: 'post',
            data : data
        }
       const response = await axios(config)
       return response.data.message
    }catch(e){
        if(e.message === 'Request failed with status code 404'){
            throw new Error(e.message)
        }else{
            throw new Error(e.message)
        }
    }
}
