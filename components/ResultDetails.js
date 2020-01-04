import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12
  },
  image: {
    width: 250,
    borderRadius: 6,
    height: 120,
    marginBottom: 4
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  }
});

export default ResultDetails;
