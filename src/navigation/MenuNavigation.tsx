import React from "react";
import useTheme from "../../femsaComponents/hooks/useTheme";
import { useMovementsContext } from "../context/SuperAppContext";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LoyaltyScreen from "../screens/LoyaltyScreen/LoyaltyScreen";
import MovementsScreen from "../screens/Movements/MovementsScreen";
import ExchangePoints from "../screens/ExchangePoints/ExchangePointsScreen";
import BalanceScreen from "../screens/Balance/BalanceScreen";
import DetailssScreen from '../screens/Movements/detailsmovements/MovementsDetailsScreens';
import TicketScreen from "../screens/Ticket/TicketScreen";
import CustomNavBar from "../../femsaComponents/components/CustomNavBar/CustomNavBar";
import { HomeScreen } from "../screens/Home/HomeScreen";
import AccountDetails from '../screens/account/accountScreen';
import { Image, TouchableOpacity } from "react-native";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface BackButton {
    onPress: () => void
  }

const MenuNavigation = () => {
    const { colors } = useTheme()
    const { state, dispatch } = useMovementsContext()
    const navigation = useNavigation();

    const BackButton: React.FC<BackButton> = ({ onPress }) => {
        return <TouchableOpacity
          style={{ marginLeft: 24 }}
          onPress={() => {
            onPress()
          }}
        >
          <Image source={require('../assets/Navigation/BackButton.png')} />
        </TouchableOpacity>
      }

    //aqui se manejan las screen de las tabs de Beneficios, si otras pantallas tambien tiene su flujo se crea una nueva stacknavigation
    // y se le anida a las tabs
    const StackNavigation = () => (
        <Stack.Navigator initialRouteName='Beneficios'>
            <Stack.Screen name="Beneficios" component={LoyaltyScreen}
                options={{
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 },
                    headerLeft: null
                }} />
            <Stack.Screen name="Movimientos" component={MovementsScreen}
                options={{
                    headerLeft: (props) => (
                        <BackButton onPress={() => {
                            navigation.navigate('Beneficios');
                            console.log('waht');
                            dispatch({ type: 'SHOW_TAB', payload: true });
                        }} />
                    ),
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 }
                }} />
            <Stack.Screen name="Exchange" component={ExchangePoints}
                options={{
                    headerLeft: (props) => (
                        <BackButton onPress={() => {
                            navigation.navigate('Beneficios');
                            dispatch({ type: 'SHOW_TAB', payload: true });
                        }} />
                    ),
                    headerTitleAlign: 'left',
                    title: 'Cambia tus puntos',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 }
                }} />
            <Stack.Screen name="Balance" component={BalanceScreen}
                options={{
                    headerLeft: (props) => (
                        <BackButton onPress={() => {
                            navigation.navigate('Exchange');
                            dispatch({ type: 'SHOW_TAB', payload: true });
                        }} />
                    ),
                    headerTitleAlign: 'left',
                    title: 'Cambia tus puntos',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 }
                }} />
            <Stack.Screen name="Detalle del Movimiento" component={DetailssScreen}
                options={{
                    headerLeft: (props) => (
                        <BackButton onPress={() => {
                            navigation.navigate('Movimientos');
                            dispatch({ type: 'SHOW_TAB', payload: false });
                        }} />
                    ),
                    headerTitleAlign: 'left'
                }} />
            <Stack.Screen name="ticketScreen" component={TicketScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    );
    //Tab navigation, aqui se maneja las screens que estan en el menu de tab
    return (
        <Tab.Navigator tabBar={(props) => (state.tabBar ? <CustomNavBar {...props} focusedColor={colors.content_primary} blurColor={colors.content_tertiary} /> : null)}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 }
                }}
            />
            <Tab.Screen
                name="Benefits"
                options={{
                    headerShown: false,
                }}
                component={StackNavigation}
            />
            <Tab.Screen
                name="Cartera"
                component={TicketScreen}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 }
                }}
            />
            <Tab.Screen
                name="Cuenta"
                options={{
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontWeight: '500', fontSize: 18, lineHeight: 24 }
                }}
                component={AccountDetails}

            />
        </Tab.Navigator>)
}

export default MenuNavigation;