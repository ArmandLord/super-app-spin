import React from "react";
import { View } from "react-native";
import SelectAlly from "../../components/ExchangePoints/SelectAlly";
import { ExchangeStyles } from "../../styles/ExchangeStyles/ExchangeStyles.styles";

function ExchangePoints() {
    console.log('exchange')

    return (
        <View style={ExchangeStyles.container}>
            <SelectAlly />
        </View>)
}

export default ExchangePoints;