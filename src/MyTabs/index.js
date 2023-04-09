import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Home";
import Currency from "../Currency";
import Calculate from "../Calculate";
import Gold from "../Gold";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "orange",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <Icon name="home" size={16} />,
            }}
          />
          <Tab.Screen
            name="Currency"
            component={Currency}
            options={{
              tabBarIcon: () => <Icon name="wallet" size={16} />,
            }}
          />
          <Tab.Screen
            name="Gold"
            component={Gold}
            options={{
              tabBarIcon: () => <Icon name="ring" size={16} />,
            }}
          />
          <Tab.Screen
            name="Calculate"
            component={Calculate}
            options={{
              tabBarIcon: () => <Icon name="calculator" size={16} />,
            }}
          />
        </Tab.Navigator>

  );
};

export default Tabs;
