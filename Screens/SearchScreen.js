import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useSearchResults from "../hooks/useSearchResults";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [request, data, error] = useSearchResults();

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={newQuery => setQuery(newQuery)}
        onQuerySumbit={() => request(query)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We found {data.length} results</Text>
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
