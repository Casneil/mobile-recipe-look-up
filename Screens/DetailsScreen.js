import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import yelp from "../api/api";

const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [data, setData] = useState(null);

  /*********************Functions************************/
  const getResultData = async id => {
    const response = await yelp.get(`/${id}`);
    setData(response.data);
  };
  /*********************Functions************************/

  /*********************useEffect************************/
  useEffect(() => {
    getResultData(id);
  }, []);
  /*********************useEffect************************/
  if (!data) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        {data.name} Location: {data.location.address1} {data.location.address2}
      </Text>
      <Text style={styles.title}>{data.display_phone}</Text>
      <FlatList
        data={data.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 180,
    width: 200,
    marginLeft: 12
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 4
  }
});

export default DetailsScreen;
