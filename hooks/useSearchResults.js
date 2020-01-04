import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

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
      setError("Something went wrong");
    }
  };
  /*********************Functions************************/

  /*********************useEffect************************/
  useEffect(() => {
    request("Carlos");
  }, []);
  /*********************useEffect************************/

  return [request, data, error];
};
