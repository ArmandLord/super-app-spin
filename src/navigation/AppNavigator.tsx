import { createStackNavigator } from "@react-navigation/stack";
import TransactionsScreen from "../screens/TransactionsScreen";
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
        <Stack.Screen 
          name="Transactions" 
          component={TransactionsScreen} options={{
          title: 'Movimientos',
        }} />
        <Stack.Screen
          name="TransactionsDetails"
          component={TransactionsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;