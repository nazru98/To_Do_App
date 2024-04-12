

import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Text } from 'react-native';
import { addProduct } from '../Redux/actions/addProducts'
import { useSelector } from 'react-redux';



const AddProduct = (props) => {
  const [formData, setFormData] = useState({
    id: '',
    category: '',
    description: '',
    imgLink: '',
    name: '',
    price: ''
  });
  const productsArr = useSelector((state) => state.product.productsArr);


  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
    
  };

 
  const handleSubmit = () => { 
    let {id,category,description,imgLink,name,price}=formData
    if(!id&&!description&&!category&&!imgLink&&!name&&!price){
      alert("Input Field should not be empty")
    }else{
      addProduct([formData,...productsArr])
      setFormData({
        id: '',
        category: '',
        description: '',
        imgLink: '',
        name: '',
        price: ''
      })
      props.navigation.navigate("Home")
    
    }

  }
   
    


  return (
    <View style={{flex:1,backgroundColor: '#FFF',}}>
      <View style={{width:140,marginBottom:10, }}>
<Button title="Go Home " onPress={()=>props.navigation.navigate("Home")}/>
</View>
    <View
    style={styles.mainView}
    >
      
     <View  style={styles.headerView}>
     <Text style={styles.headerStyle}>Product Details</Text>
     </View>
       <Text style={styles.textStyle}>Product ID</Text>
      <TextInput
       style={styles.inputField}
        placeholder="ID"
        value={formData.id}
        onChangeText={(text) => handleInputChange('id', text)}
      />
      <Text style={styles.textStyle}>Category</Text>
      <TextInput
       style={styles.inputField}
        placeholder="Category"
        value={formData.category}
        onChangeText={(text) => handleInputChange('category', text)}
      />
       <Text style={styles.textStyle}>Description</Text>
      <TextInput
      style={styles.inputField}
        placeholder="Description"
        value={formData.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
       <Text style={styles.textStyle}>Image Link</Text>
      
      <TextInput
       style={styles.inputField}
        placeholder="Image Link"
        value={formData.imgLink}
        onChangeText={(text) => handleInputChange('imgLink', text)}
      />
      <Text style={styles.textStyle}>Product Name</Text>
      <TextInput
       style={styles.inputField}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <Text style={styles.textStyle}>Price</Text>

      <TextInput
       style={styles.inputField}
        placeholder="Price"
        value={formData.price}
        onChangeText={(text) => handleInputChange('price', text)}
        keyboardType="numeric"
      />
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
    </View>
  );
};

const styles=StyleSheet.create({
    mainView:{
        flex:1,
       
    },
    inputField:{
      borderWidth:1,
      borderColor:'gray' ,
      paddingVertical:10,
      paddingHorizontal:20,
      marginBottom:10, 
      borderRadius:5,
    },
    textStyle:{
      fontSize:15,
      fontWeight:'bold'
    },
    headerStyle:{
      fontSize:25,
      fontWeight:'bold',
      justifyContent:'center',

    },
    headerView:{
      alignItems:'center',
      backgroundColor: '#FFF',
    }
})

  
export default  AddProduct;
