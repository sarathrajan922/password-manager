import axios from "axios";
import BASE_URL,{urls} from "../../../config";


export const getPasswords = async(limit,offSet)=>{
    const obj = {
        limit,
        offSet
    }
    try{
        const config = {
            url: `${BASE_URL}${urls.GET_PASSWORD}?limit=${obj.limit}&offSet=${obj.offSet}`,
            method: "get"
        }

        const response = await axios(config)
        return response.data
    }catch(e){
        if(e.message === 'Request failed with status code 404'){
            throw new Error('Api not found')
        }else{
            throw new Error('something went wrong')
        }
    }
}