import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CurrencyItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text>{item.Buying ?? "-"}</Text>
      <Text>{item.Selling ?? "-"}</Text>
    </View>
  );
};

export default CurrencyItem;
const styles = StyleSheet.create({
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