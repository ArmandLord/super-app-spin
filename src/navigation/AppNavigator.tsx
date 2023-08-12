import { createStackNavigator } from "@react-navigation/stack";
import TransactionsScreen from "../screens/TransactionsScreen";
import TransactionsDetailsScreen from "../screens/TransactionsDetailsScreen";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import TicketScreen from "../screens/TicketScreen";
import options from "./options";
import PointsScreen from "../screens/PointsScreen";
import BalanceScreen from "../screens/BalanceScreen";
import { useAppContext } from "../context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AppNavigator = () => {

  const {setPoints} = useAppContext();
  AsyncStorage.getItem('points').then(points => {
    if (points) {
      setPoints(parseInt(points))
    }
  })
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        }
      }}>
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
        <Stack.Screen
          options={{
            ...options,
            title: 'Detalles del movimiento', 
            headerLeft: () => null,
            headerStyle: {
              ...options.headerStyle,
              backgroundColor: '#087D6F',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
          name="TicketScreen"
          component={TicketScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;