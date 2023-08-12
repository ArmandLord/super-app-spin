import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type NavListBase = {
  TransactionsScreen: undefined;
  PointsScreen: undefined;
  Tabs: undefined;
  BalanceScreen: undefined;
  TransactionsDetailsScreen: undefined;
  TicketScreen: undefined;
};

// Define los tipos de navegación y ruta para las pantallas del stack
type AppStackProps = {
  navigation: StackNavigationProp<NavListBase>;
  route: RouteProp<NavListBase>;
};

export type AppStackNavigationProp = AppStackProps['navigation'];
export type AppStackRouteProp = AppStackProps['route'];

export type DetailsScreenProps = AppStackProps;
