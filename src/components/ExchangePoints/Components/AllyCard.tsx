import React from "react";
import { View, Image } from "react-native";
import { AlliesInterface } from "../../../types/AlliesType";

import Text from "../../../../femsaComponents/components/Text/Text";
import { AllyCardStyles } from "../../../styles/ExchangeStyles/ExchangeStyles.styles";
import BaseCard from "../../../../femsaComponents/components/Card/components/BaseCard";
import { useMovementsContext } from "../../../context/SuperAppContext";
import { useNavigation } from "@react-navigation/native";

const AllyCard: React.FC<AlliesInterface> = ({ image, name, categroy }) => {

    const { dispatch } = useMovementsContext()
    const navigation = useNavigation()
    return (
        <BaseCard style={AllyCardStyles.cardStyles} onPress={() => {
            dispatch({ type: 'SET_SELECTED_ALLY', payload: { image, name, categroy } })
            navigation.navigate('Balance')
        }}>
            <View style={AllyCardStyles.container}>
                <Image source={image} style={AllyCardStyles.image} />
                <View style={AllyCardStyles.stringsContainer}>
                    <Text style={AllyCardStyles.name}>{name}</Text>
                    <Text style={AllyCardStyles.category}>{categroy}</Text>
                </View>
                <View style={AllyCardStyles.frontButtonContainer}>
                    <Image source={require('../../../assets/Navigation/frontButton.png')} style={AllyCardStyles.frontButton} />
                </View>
            </View>
        </BaseCard>)
}

export default AllyCard;