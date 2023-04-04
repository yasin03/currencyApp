import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import Loading from "../Loading";
import axios from "axios";

const Currency = observer(() => {
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
      setCurrencies(currencyList);
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


  const renderItem = ({ item }) => (
    <View style={styles.item}>
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
        renderItem={renderItem}
        keyExtractor={(item, index) => item.key}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
