import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, result, errorMessage] = useResult();
  const [term, setTerm] = useState("");
  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? ( <Text style={styles.error}>{errorMessage}</Text> ) :( <>
      {result.length == 0 ? (
        <Text style={styles.error}>Any Restaurant Coludn't Be Found</Text>
      ) : (
        <>
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
        </>
      )}
      </>)}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
