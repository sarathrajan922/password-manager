import axios from "axios";
import BASE_URL,{urls} from "../../../config";

export const getAllPasswords = async ()=>{
    try{
        const config = {
            url: BASE_URL+urls.GET_ALL_PASSWORDS,
            method: 'get',
        }

        const response = await axios(config)
        
        return response?.data?.result
    }catch(e){
        if(e.message === 'Request failed with status code 404'){
            throw new Error('api not found')
        }else{
            throw new Error(e.message)
        }
    }
}