import axios from "axios";
import BASE_URL,{urls} from "../../../config";

export const deletePassword = async(title)=>{
    try{
        const config= {
            url: BASE_URL+urls.DELETE_PASSWORD,
            method: 'post',
            data: {
                title: title
            }
        }
        const response = await axios(config)
        if(response?.data?.message === 'deleted successfully'){
            return true
        }else{
            return false
        }
    }catch(e){
        if(e.message === 'Request failed with status code 404'){
            throw new Error('Api not found')
        }else{
            throw new Error(e.message)
        }
    }
}