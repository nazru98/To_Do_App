import { deleteProductDataSerer } from '../reducers/productServerReducer'
import store from '../store'
const {dispatch}=store
export function deleteProductToServer(data){
    
dispatch(deleteProductDataSerer(data))
}