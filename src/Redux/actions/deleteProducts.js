import {deleteProductData} from '../reducers/productReducer'
import store from '../store'
const {dispatch}=store
export function deleteProduct(data){
    
dispatch(deleteProductData(data))
}
