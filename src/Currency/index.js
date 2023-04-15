import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Loading from "../Loading";
import axios from "axios";

const Currency = () => {
  const [data, setData] = useState([]);
  const [currencies, setCurrencies] = useState();

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://finans.truncgil.com/v3/today.json"
      );
      const currencyList = Object.entries(response.data).map(([key, value]) => {
        return { name: key, value };
      });
      setCurrencies(currencyList.slice(1, 67));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.item} key={index}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text>{item.value.Buying ?? "-"}</Text>
      <Text>{item.value.Selling ?? "-"}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Döviz Kurları</Text>
        <Text style={styles.headerText}>Alış</Text>
        <Text style={styles.headerText}>Satış</Text>
      </View>
      <FlatList
        data={currencies}
        renderItem={(item, index) => renderItem(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    backgroundColor:"white"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Currency;
