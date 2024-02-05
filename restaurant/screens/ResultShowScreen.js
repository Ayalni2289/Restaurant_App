import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

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
