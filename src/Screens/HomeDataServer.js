import { View, Text,FlatList,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import {deleteData,getHomeData}  from '../Redux/actions/home'
import { useSelector } from 'react-redux'
import { addProductToServer } from '../Redux/actions/addProductServer'
import ProductComponent from '../component/ProductComponent'
import { deleteProductToServer } from '../Redux/actions/deleteProductServer'
const HomeDataServer = (props) => {
    // const [state, setState] = useState([]);
    const productsData=useSelector((state)=>state.serverData.productsData)
    const isAdded=useSelector((state)=>state.serverData.isAdded)
    console.log(isAdded,'isadded');

    useEffect(() => {
        homeData();
    
      }, []);
    
      const homeData = () => {
        getHomeData('',{},{}).then((res)=>{
      
   productsData=addProductToServer([...productsData,...res?.data])
          
        }).catch((error)=>{
          console.log(error.message,'error');
        })
      };
      console.log(productsData,'prouctData');
      const handleDelete = (id) => {
        deleteData(`/${id}`, {}, {}).then(() => {
        deleteProductToServer(id)
        }).catch((err) => {
          console.error('Error deleting product:', err);
        });
      }
console.log('productsData',productsData);
const handleEdit=(item)=>{
  props.navigation.navigate('AddProductToServer', {data:item, isFromEdit: true})
console.log(item,"Osdsdsds");
}

  return (
    <View style={{flex:1}}>
          <View style={{ width: 140, marginBottom: 10 }}>
        <Button
          title=" Add Product "
          onPress={() => props.navigation.navigate("AddProductToServer")}
        />
      </View>
      <FlatList
        data={productsData}
        renderItem={({ item }) => (
          <ProductComponent
            item={item}
            onDelete={() => handleDelete(item.id)}
            onEdit={()=>handleEdit(item)}
          />
        )}
      />
    </View>
  )
}

export default HomeDataServer






