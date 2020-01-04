import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ query, onQueryChange, onQuerySumbit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search.."
        value={query}
        onChangeText={onQueryChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onQuerySumbit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#dbd9d9",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 12,
    flexDirection: "row",
    marginTop: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 17
  },
  iconStyle: {
    fontSize: 34,
    alignSelf: "center",
    marginHorizontal: 8
  }
});

export default SearchBar;
