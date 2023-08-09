import { createStackNavigator } from "@react-navigation/stack";
import TransactionsScreen from "../screens/TransactionsScreen";
import TransactionsDetailsScreen from "../screens/TransactionsDetailsScreen";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";

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
          name="TransactionsScreen" 
          component={TransactionsScreen} options={{
          title: '',
          headerBackTitleStyle: {
            color: '#05053D',
            fontSize: 18,
            paddingLeft: 19,
            fontWeight: '500',
          },
          headerLeftContainerStyle: {
            paddingLeft: 26,
          },
          headerBackTitle: 'Movimientos',
          headerStyle: {
            height: 116
          },
          headerShadowVisible: false,
          headerBackImage: () => <Image source={require('../assets/Angle_left.png')} />
        }} />
        <Stack.Screen
          name="TransactionsDetailsScreen"
          component={TransactionsDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;