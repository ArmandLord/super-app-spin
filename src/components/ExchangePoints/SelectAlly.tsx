import React from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { AlliesInterface } from "../../types/AlliesType";
import AllyCard from "./Components/AllyCard";
import Text from "../../../femsaComponents/components/Text/Text";
import { SelectAllyStyles } from "../../styles/ExchangeStyles/ExchangeStyles.styles";

const SelectAlly = () => {

    const Allies: AlliesInterface[] = [
        {
            image: require('../../assets/Allies/VolarisLogo.png'),
            name: 'Volair',
            categroy: 'Movilidad'
        },
        {
            image: require('../../assets/Allies/SmartLogo.png'),
            name: 'Smart Fit',
            categroy: 'Deportes'
        },
        {
            image: require('../../assets/Allies/VixLogo.png'),
            name: 'Vix',
            categroy: 'Entretenimiento'
        }
    ]

    return (
        <View>
            <Text style={SelectAllyStyles.title}>Elige la marca aliada en la que quieres usar tus puntos</Text>
            <FlatList data={Allies} keyExtractor={(item) => item.name}
                renderItem={({ item }) => <AllyCard image={item.image} name={item.name} categroy={item.categroy} />} />
        </View>)
}

export default SelectAlly;