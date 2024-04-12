import { apiEndpoints } from '../../Config/urls'
import { apiGet } from "../../utils/utils"
import { apiDelete } from '../../utils/utils';
import { apiPost } from '../../utils/utils';
import { apiUpdate } from '../../utils/utils';
export const getHomeData = (quary,data,headers) =>{
 
return apiGet(apiEndpoints.GET_POST + quary, data, headers);
}

export const deleteData = (quary,data,headers) =>{
 
    return apiDelete(apiEndpoints.GET_POST + quary, data, headers);
    }



    export const postData = (quary,data,headers) =>{
 
        return apiPost(apiEndpoints.GET_POST + quary, data, headers);
        }

        export const putData = (quary,data,headers) =>{
          return apiUpdate(apiEndpoints.GET_POST + quary, data, headers);
            }