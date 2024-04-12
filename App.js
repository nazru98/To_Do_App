import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import Routes from "./src/Navigations/Routes";
import React, { useEffect } from "react";
import { getData } from "./src/utils/utils";
import { addProduct } from "./src/Redux/actions/addProducts";

function App() {
  useEffect(async () => {
    const listData = await getData("listData");
    console.log("listData", listData);
    if (listData) {
      addProduct(listData);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 10,
  },
});
export default App;
