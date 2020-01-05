import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import yelp from "../api/api";
import { yellow, darkGrey, green } from "../colors/Colors";
const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [data, setData] = useState(null);
  //   console.log(data);

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
      <Text style={styles.heading}>{data.name}</Text>
      <Text style={styles.title}>{data.location.city}</Text>
      <Text style={styles.title}>
        {data.location.address1} {data.location.address2}
      </Text>
      <Text style={styles.title}>Phone: {data.display_phone}</Text>
      <FlatList
        data={data.photos}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
    width: 298,
    borderRadius: 6,
    height: 180,
    marginBottom: 6,
    marginLeft: 12,
    marginTop: 6
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    // marginLeft: 12,
    marginBottom: 4,
    color: green,
    marginTop: 0.5,
    alignSelf: "center"
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    // marginLeft: 12,
    marginBottom: 15,
    color: yellow,
    marginTop: 8,
    alignSelf: "center"
    // justifyContent: "center"
  }
});

export default DetailsScreen;
