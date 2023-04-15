import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const GoldItem = (props) => {
  const { item } = props;
  const [change, setChange] = useState();
  const [buy, setBuy] = useState();
  const [sell, setSell] = useState();
  const [name, setName] = useState();

  const loadData = () => {
    item === undefined ? setBuy("-") : setBuy(item.Buying);
    item === undefined ? setSell("-") : setSell(item.Selling);
    if (item === undefined) {
      setChange("-");
    } else {
      var x = item.Change;
      setChange(parseFloat(x, 20));
    }
    if(item.name === "ons") setName("ONS");
    if (item.name === "gram-altin") setName("Gram Altın");
    if (item.name === "ceyrek-altin") setName("Çeyrek Altın");
    if (item.name === "yarim-altin") setName("Yarım Altın");
    if (item.name === "tam-altin") setName("Tam Altın");
    if (item.name === "cumhuriyet-altini") setName("Cumh. Altını");
    if (item.name === "ata-altin") setName("Ata Altın");
    if (item.name === "resat-altin") setName("Reşat Altın");
    if (item.name === "hamit-altin") setName("Hamit Altın");
    if (item.name === "ikibucuk-altin") setName("2.5 Altın");
    if (item.name === "gremse-altin") setName("Gremse Altın");
    if (item.name === "besli-altin") setName("Beşli Altın");
    if (item.name === "14-ayar-altin") setName("14 Ayar Altın");
    if (item.name === "18-ayar-altin") setName("18 Ayar Altın");
    if (item.name === "22-ayar-bilezik") setName("22 Ayar Bilezik");
    if (item.name === "gumus") setName("Gümüş");
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            change === "-" ? "#e4e4e4" : change < 0 ? "#ffc0c0" : "#b6ff90",
        },
      ]}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.buy}>{buy}</Text>
      <Text style={styles.sell}>{sell}</Text>
    </View>
  );
};

export default GoldItem;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 15,
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
    left: 160,
  },
  sell: {
    fontSize: 18,
    position: "absolute",
    marginTop: 12,
    left: 250,
  },
});
