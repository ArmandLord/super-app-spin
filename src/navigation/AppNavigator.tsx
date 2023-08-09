import { createStackNavigator } from "@react-navigation/stack";
import TransactionsScreen from "../screens/TransactionsScreen";
import TransactionsDetailsScreen from "../screens/TransactionsDetailsScreen";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import options from "./options";
import PointsScreen from "../screens/PointsScreen";
import BalanceScreen from "../screens/BalanceScreen";

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
            title: 'Movimientos',
          }}
          name="TransactionsScreen"
          component={TransactionsScreen}
        />
        <Stack.Screen
          options={{
            ...options,
            title: 'Cambia tus puntos',
          }}
          name="PointsScreen"
          component={PointsScreen}
        />
        <Stack.Screen
          options={{
            ...options,
            title: 'Cambia tus puntos',
          }}
          name="BalanceScreen"
          component={BalanceScreen}
        />
        <Stack.Screen
          options={{
            ...options,
            title: 'Detalles del movimiento',
          }}
          name="TransactionsDetailsScreen"
          component={TransactionsDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;