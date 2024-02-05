import { FlatList, Image, StyleSheet, Text, View } from "react-native";
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
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <Text>{result.location.address1}</Text>
      <Text>{result.location.city}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
