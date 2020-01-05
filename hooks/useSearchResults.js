import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import yelp from "../api/api";

export default () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const errorMessage = message => {
    return <Text style={styles.message}>{message} 😱</Text>;
  };

  /*********************Functions************************/
  const request = async defaultSearch => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: defaultSearch,
          location: "berlin"
        }
      });
      setData(response.data.businesses);
    } catch (err) {
      setError(() => errorMessage("Something went wrong"));
    }
  };
  /*********************Functions************************/

  /*********************useEffect************************/
  useEffect(() => {
    request("Carlos");
  }, []);
  /*********************useEffect************************/

  const styles = StyleSheet.create({
    message: {
      fontSize: 25
    }
  });

  return [request, data, error];
};
