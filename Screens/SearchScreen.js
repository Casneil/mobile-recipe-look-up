import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [request, data, error] = useSearchResults();

  /*********************Functions************************/
  const filterByPrice = price => {
    // price from data api  = $ || $$ || $$
    return data.filter(result => {
      return result.price === price;
    });
  };
  /*********************Functions************************/
  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={newQuery => setQuery(newQuery)}
        onQuerySumbit={() => request(query)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterByPrice("€")} />
        <ResultsList title="Bit Expensive" results={filterByPrice("€€")} />
        <ResultsList title="Very Expensive" results={filterByPrice("€€€")} />
        <ResultsList
          title="Very Very Expensive"
          results={filterByPrice("€€€€")}
        />
      </ScrollView>
    </>
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
