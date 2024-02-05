import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.iconStyle} name="search1" color="black" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  iconStyle: {
    marginHorizontal: 15,
    fontSize: 25,
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
});
