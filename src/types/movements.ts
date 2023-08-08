import { StackNavigationProp } from "@react-navigation/stack";

export interface Movement {
  id: number;
  entity: string;
  date: string;
  points: number;
  operation: string;
  transactionNo: string;
  expiryDate?: string;
  giftCode?: string;
}

export interface MovementDetailProps {
  route: { params: { movement: Movement } };
  navigation: { goBack: () => void };
}

export type RootStackParamList = {
  Movements: undefined;
  MovementDetails: { movement: Movement };
  CreateMovement: undefined;
};

export type MovementDetailNavigationProp = StackNavigationProp<RootStackParamList, 'MovementDetails'>;
