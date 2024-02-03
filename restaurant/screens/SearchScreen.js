import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, result] = useResult();
  
  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultList
        title={"Cheap Restaurants"}
        result={filterResultByPrice("₺")}
      />
      <ResultList
        title={"Medium-Price Restaurants"}
        result={filterResultByPrice("₺₺")}
      />
      <ResultList
        title={"Expensive Restaurants"}
        result={filterResultByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
