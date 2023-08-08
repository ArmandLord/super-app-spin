import { Image, StyleProp, ViewStyle } from "react-native"

export interface StackedCardProps {
    title: string;
    icon: JSX.Element;
    onPress?: () => void;
    titlesSize?: string;
}


interface StackedCardGridProps {
    data: StackedCardProps[];
    idForTestContainer?: string;
    idForTestItems?: string;
    containerStyle?: StyleProp<ViewStyle>;
    itemsStyle?: StyleProp<ViewStyle>;
    numberOfColumns?: 2 | 3;
}