import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../screens/Transactions";
import TransactionsDetails from "../screens/TransactionsDetails";
import TabsNavigator from "./TabsNavigator";

const Stack = createStackNavigator();

const TransactionsNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabsNavigator} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="TransactionsDetails" component={TransactionsDetails} />
    </Stack.Navigator>
  )
}

export default TransactionsNavigator;