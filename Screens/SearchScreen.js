import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={newQuery => setQuery(newQuery)}
        onQuerySumbit={() => console.log("Term submitted")}
      />
      <Text>Search Screen</Text>
      <Text>{query}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SearchScreen;
