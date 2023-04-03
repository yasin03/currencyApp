import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { BarIndicator } from "react-native-indicators";
const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BarIndicator size={72} color="orange" count={5}/>
    </View>
  );
};

export default Loading;
