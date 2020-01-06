import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetails from "../components/ResultDetails";
import { green } from "../colors/Colors";

const ResultsList = ({ title, results, navigation }) => {
  if (results.length === 0) {
    return null;

    //   <ImageBackground
    //     source={beach}
    //     style={{ flex: 1, width: 200, height: 200 }}
    //   ></ImageBackground>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { id: item.id })}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
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
    marginBottom: 4,
    color: green
  },
  container: {
    marginBottom: 9
  }
});

export default withNavigation(ResultsList);
