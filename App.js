import React from "react";
import MyTabs from "./src/MyTabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/Store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </StoreProvider>
  );
}
