import { editProductDataServer } from "../reducers/productServerReducer";
import store from '../store'
const {dispatch}=store
export function updateDataToServer(data){
dispatch(editProductDataServer(data))
}