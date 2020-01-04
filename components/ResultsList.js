import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import useSearchResults from "../hooks/useSearchResults";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default ResultsList;
