import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../screens/Transactions";
import TransactionsDetails from "../screens/TransactionDetails";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen
          name="TransactionsDetails"
          component={TransactionsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;