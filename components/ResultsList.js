import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ResultDetails from "../components/ResultDetails";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 4
  },
  container: {
    marginBottom: 9
  }
});

export default ResultsList;
