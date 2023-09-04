import axios from "axios";
import BASE_URL,{urls} from "../../../config";

export const decryptPassword = async (password,iv)=>{
    try{
        const config = {
            url: BASE_URL+urls.SHOW_PASSWORD,
            method: 'post',
            data : {
                password,
                iv
            }
        }

        const response = await axios(config)
        return response.data
    }catch(e){
        if(e.message === 'Request failed with status code 404'){
            throw new Error('Api not found!')
        }else{
            throw new Error(e.message)
        }
    }
}