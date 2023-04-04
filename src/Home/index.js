import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import Loading from "../Loading";
import axios from "axios";
import ItemCard from "./ItemCard";

const Home = observer(() => {
  const [data, setData] = useState([]);
  const [currencies, setCurrencies] = useState();
  const [updateDate, setUpdateDate] = useState();
  const [dolar, setDolar] = useState();
  const [euro, setEuro] = useState();
  const [sterlin, setSterlin] = useState();
  const [gram, setGram] = useState();
  const [ceyrek, setCeyrek] = useState();

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://finans.truncgil.com/v3/today.json"
      );
      const currencyList = Object.entries(response.data).map(([key, value]) => {
        return { name: key, value };
      });
      setCurrencies(currencyList);
      currencyList.filter((item) => {
        if (item.name === "USD") setDolar(Object.values(item?.value));
        if (item.name === "EUR") setEuro(Object.values(item?.value));
        if (item.name === "SEK") setSterlin(Object.values(item?.value));
        if (item.name === "gram-altin") setGram(Object.values(item?.value));
        if (item.name === "ceyrek-altin") setCeyrek(Object.values(item?.value));
        if (item.name === "Update_Date") setUpdateDate(item?.value);
      });
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Döviz Kurları</Text>
        <Text style={styles.headerText}>Alış</Text>
        <Text style={styles.headerText}>Satış</Text>
      </View>

      <View>
        <Text style={styles.updateDate}>{updateDate}</Text>
        <ItemCard name="US Dolar" item={dolar} />
        <ItemCard name="Euro" item={euro} />
        <ItemCard name="Sterlin" item={sterlin} />
        <ItemCard name="Gram Altın" item={gram} />
        <ItemCard name="Çeyrek Altın" item={ceyrek} />
      </View>
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
  updateDate: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    padding: 5,
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
export default Home;
