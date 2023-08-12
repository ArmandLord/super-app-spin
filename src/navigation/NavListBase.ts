import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type NavListBase = {
  TransactionsScreen: undefined;
  PointsScreen: undefined;
  Tabs: undefined;
  BalanceScreen: undefined;
  TransactionsDetailsScreen: undefined;
  TicketScreen: undefined;
};

// Define el tipo de navegación para las pantallas del stack
export type AppStackNavigationProp = StackNavigationProp<
  NavListBase,
  'TransactionsScreen',
  'PointsScreen'
>;

// Define el tipo de ruta para las pantallas del stack
export type AppStackRouteProp = RouteProp<NavListBase, 
|'TransactionsScreen'
|'PointsScreen'
|'Tabs'
|'BalanceScreen'
|'TransactionsDetailsScreen'
|'TicketScreen'>;

export type DetailsScreenProps = {
  navigation: StackNavigationProp<NavListBase, 
  |'TransactionsScreen'
  |'PointsScreen'
  |'Tabs'
  |'BalanceScreen'
  |'TransactionsDetailsScreen'
  |'TicketScreen'>;
  route: RouteProp<NavListBase, 
  |'TransactionsScreen'
  |'PointsScreen'
  |'Tabs'
  |'BalanceScreen'
  |'TransactionsDetailsScreen'
  |'TicketScreen'>;
};
