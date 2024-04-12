import { addProductDataServer } from "../reducers/productServerReducer";
import store from '../store'
const {dispatch}=store
export function addProductToServer(data){
dispatch(addProductDataServer(data))
}