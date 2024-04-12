import { View, Button, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import ProductComponent from "../component/ProductComponent";
import { deleteProduct } from "../Redux/actions/deleteProducts";
import { useSelector } from "react-redux";
import { getData,storeData } from "../utils/utils";
const Home = (props) => {
  const productsArr = useSelector((state) => state.product.productsArr);

 
const handleDelete = async (id) => {
  try {
    const storedData = await getData("listData");
    console.log(storedData,'storeddata');
    if (storedData) {
     
      const updatedProducts = storedData.filter((product) => 
      product.id !== id);
      await storeData("listData", updatedProducts);
      console.log("Product deleted and storage updated successfully");
    }
  } catch (error) {
    console.error("Error deleting product from storage:", error);
  }

  deleteProduct(id);
};

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: 140, marginBottom: 10 }}>
        <Button
          title=" Add Product "
          onPress={() => props.navigation.navigate("AddProduct")}
        />
      </View>
      <FlatList
        data={productsArr}
        renderItem={({ item }) => (
          <ProductComponent
            item={item}
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />
    </View>
  );
};
export default Home;
