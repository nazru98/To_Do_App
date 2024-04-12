import { storeData } from '../../utils/utils'
import {addProductData} from '../reducers/productReducer'
import store from '../store'
const {dispatch}=store
export function addProduct(data){
storeData('listData',data)
dispatch(addProductData(data))
}
