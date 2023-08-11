import React from "react";
import { View } from "react-native";
import { TicketBackgroundStyle } from "../../styles/TicketStyles/Ticket.styles";

const TicketBackground = () => {
    return (<View style={TicketBackgroundStyle.backGround}>
        <View style={TicketBackgroundStyle.topHalf} />
        <View style={TicketBackgroundStyle.bottomHalf} />
        <View />
    </View>)
}

export default TicketBackground;