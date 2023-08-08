import React from "react"
import { StyleSheet, View, useWindowDimensions } from "react-native"
import { StackedCardProps } from "../../../types/LoyaltyTypes";
import Card from "../Card/Card";
import { styles } from "../../../styles/LoyaltyStyles/CardGrid.styles";
import { TouchableOpacity } from "react-native-gesture-handler";



interface CardGridProps {
    data: StackedCardProps[];
    idForTestContainer?: string;
    idForTestItems?: string
    titlesSize?: 'small' | 'default' | 'extra-small';
}

const CardGrid: React.FC<CardGridProps> = ({ data, idForTestContainer, idForTestItems, titlesSize }) => {
    const { width } = useWindowDimensions();
    const twoColumnsCardWidth = width / 2 - 15;

    return (
        <View
            style={[styles.container]}
            testID={idForTestContainer}
        >
            {data.map((card, i) => (
                <View
                    key={i}
                    style={[
                        { ...styles.cardContainer },
                        {
                            width:
                                twoColumnsCardWidth

                        },
                    ]}
                >
                    <Card
                        title={card.title}
                        onPress={card.onPress}
                        icon={card.icon}
                        titleSize={titlesSize}
                        testID={idForTestItems}
                    />
                </View>
            ))}
        </View>
    );
}

export default CardGrid;