import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemCard = (props) => {
  const { name, item } = props;

  const [change, setChange] = useState();
  const [buy, setBuy] = useState();
  const [sell, setSell] = useState();

  const loadData = () => {
    item === undefined ? setBuy("-") : setBuy(item[0]);
    item === undefined ? setSell("-") : setSell(item[2]);
    item === undefined ? setChange("-") : setChange(item[3].slice(1));
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(change);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: change < 0 ? "red" : "green" },
      ]}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.buy}>{buy}</Text>
      <Text style={styles.sell}>{sell}</Text>
    </View>
  );
};

export default ItemCard;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    borderColor: "#a4a4a4",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  buy: {
    fontSize: 18,
    position: "absolute",
    marginTop: 12,
    left: 170,
  },
  sell: {
    fontSize: 18,
    position: "absolute",
    marginTop: 12,
    left: 260,
  },
});
