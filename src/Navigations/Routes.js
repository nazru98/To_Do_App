import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import AddProduct from '../Screens/AddProduct';
import { NavigationContainer } from '@react-navigation/native';
import HomeDataServer from '../Screens/HomeDataServer';
import AddProductToServer from '../Screens/AddProductToServer';
const Stack = createStackNavigator();

const Routes=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="HomeDataServer" component={HomeDataServer}/>
    <Stack.Screen name="AddProductToServer" component={AddProductToServer}/>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddProduct" component={AddProduct} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes