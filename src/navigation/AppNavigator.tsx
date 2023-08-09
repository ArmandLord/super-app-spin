import { createStackNavigator } from "@react-navigation/stack";
import TransactionsScreen from "../screens/TransactionsScreen";
import TransactionsDetailsScreen from "../screens/TransactionsDetailsScreen";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import TicketScreen from "../screens/TicketScreen";
import options from "./options";

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
          options={{
            ...options,
            title: 'Movimientos'
          }}
          name="TransactionsScreen" 
          component={TransactionsScreen} />
        <Stack.Screen
          options={{
            ...options,
            title: 'Detalles del movimiento',
          }}
          name="TransactionsDetailsScreen"
          component={TransactionsDetailsScreen}
        />
        <Stack.Screen
          options={{
            ...options,
            title: 'Detalles del movimiento', 
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: '#087D6F'
            },
            headerTitleStyle: {
              color: 'white',
            }
          }}
          name="TicketScreen"
          component={TicketScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;