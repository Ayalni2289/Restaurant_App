import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function ResultShowScreen({ route }) {
  const id = route.params.id;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      
      <Text style={styles.title}>{result.name}  </Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
      {
        result.is_closed ? <AntDesign name="closecircle" size={30} color="black" /> :
        <MaterialIcons name="delivery-dining" size={30} color="black" />
      }
      </View>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
        keyExtractor={(item, index) => index.toString()} // Her öğenin benzersiz bir anahtarı olmalıdır.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon:{
    alignSelf:"center",
    marginVertical:10,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    height: 200,
    margin: 10,
    borderRadius: 4,
    marginEnd: 10,
  },  
  title:{
    alignSelf:"center",
    fontWeight:"bold",
    fontSize:20,
    marginVertical:10,
  },
  phone:{
    alignSelf:"center",
    fontSize:15,
  },
});
