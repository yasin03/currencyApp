import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import Loading from "../Loading";

const Calculate = () => {
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [currencyData, setCurrencyData] = useState([]);
  const [updateDate, setUpdateDate] = useState();
  const [firstText, setFirstText] = useState();
  const [secondText, setSecondText] = useState();
  const [result, setResult] = useState();

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://finans.truncgil.com/v3/today.json"
      );
      const currencyList = Object.entries(response.data).map(([key, value]) => {
        return { name: key, value };
      });
      setCurrencyData(currencyList);
      currencyList.filter((item) => {
        if (item.name === "Update_Date") setUpdateDate(item?.value);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    setResult(firstText * parseFloat(firstValue?.replace(",", ".")));
  }, [firstText, secondText]);

  if (!currencyData) {
    return <Loading />;
  }

  const renderLabel = () => {
    if (firstValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "orange" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const data = [];

  const newData = currencyData.slice(1);
  newData.map((item, i) =>
    data.push({
      label: item.name + " to TL",
      value: item?.value.Buying,
    })
  );

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "orange" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={firstValue ? firstValue : data[0]}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setFirstValue(item.value);
          setIsFocus(false);
        }}
      />
      <TextInput
        keyboardType="number"
        value={firstText}
        onChangeText={(firstText) => setFirstText(firstText)}
        style={styles.text}
        underlineColor="grey"
        activeUnderlineColor="orange"
      />
      {/*       <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "orange" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={secondValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setSecondValue(item.value);
          setIsFocus(false);
        }}
      />
      <TextInput
        keyboardType="number"
        value={secondText}
        onChangeText={(secondText) => setSecondText(secondText)}
        style={styles.text}
        underlineColor="grey"
        activeUnderlineColor="orange"
      /> */}

      <Text style={styles.result}>{result ? result.toFixed(2) : 0}</Text>
    </View>
  );
};

export default Calculate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 25,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 40,
    top: 15,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  text: {
    backgroundColor: "#EFEFEF",
    marginVertical: 20,
  },
  result: {
    fontSize: 24,
    marginTop: 10,
  },
});
