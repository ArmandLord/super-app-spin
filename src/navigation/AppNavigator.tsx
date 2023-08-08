

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from "./TabsNavigator";
import TransactionsNavigation from "./TransactionsNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TransactionsNavigation/>
    </NavigationContainer>
  );
};

export default AppNavigator;