import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4ZYbGj9OJk7PJ_XW7kr2QmHIkF6KLRtH59_c9SB-4ZLYvfQb3CNSmgSqDj1ydkWAh_EvxhWkG7sSNjyS2Ht9Uik8rIgBaCsCPnK0-AAJHDJEumdks1OB0Yn3VLwQXnYx"
  }
});
