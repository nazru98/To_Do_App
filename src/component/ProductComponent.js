



import React from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native';

const ProductComponent = ({ item ,onDelete,onEdit}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imgSize} source={{ uri: item.imgLink }}  />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price}</Text>
       <View style={{flexDirection:'row',flex:1}}>
       <Button
        title='Delete'
        color="red"
        onPress={onDelete}
        style={{marginRight:10}}
        />
         <Button
        title='Edit'
        color="blue"
        onPress={onEdit}
        />
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
  borderWidth:2,
   
 
  },
  imgSize: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default ProductComponent;
