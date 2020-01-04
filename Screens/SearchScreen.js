import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const request = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: query,
          location: "berlin"
        }
      });
      setData(response.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={newQuery => setQuery(newQuery)}
        onQuerySumbit={() => request()}
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
