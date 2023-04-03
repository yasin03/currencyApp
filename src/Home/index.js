import React, { useState } from "react";
import { Text, View } from "react-native";
import Loading from "../Loading";
import CurrencyStore from "../Store/CurrencyStore";

const Home = (props) => {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(CurrencyStore.currencies);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <Text>Home Page</Text>
          <Text>asd</Text>
        </View>
      )}
    </>
  );
};

export default Home;
