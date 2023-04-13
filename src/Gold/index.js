import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Loading from "../Loading";
import axios from "axios";
import GoldItem from "./GoldItem";

const Gold = () => {
  const [data, setData] = useState([]);
  const [currencies, setCurrencies] = useState();
  const [updateDate, setUpdateDate] = useState();
  const [gold, setGold] = useState();

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://finans.truncgil.com/v3/today.json"
      );
      const currencyList = Object.entries(response.data).map(([key, value]) => {
        return { name: key, ...value };
      });
      setCurrencies(currencyList);
      setUpdateDate(response.data.Update_Date);
      const currentGold = [];
      currencyList.filter((item) => {
        if (item.Type === "Gold") currentGold.push(item);
      });
      setData(currentGold);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log("Current Gold => " + data);
  if (!data) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Döviz Kurları</Text>
            <Text style={styles.headerText}>Alış</Text>
            <Text style={styles.headerText}>Satış</Text>
          </View>

          <View>
            <Text style={styles.updateDate}>Last Update : {updateDate}</Text>
            {data.map((item) => (
              <GoldItem item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Gold;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
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
