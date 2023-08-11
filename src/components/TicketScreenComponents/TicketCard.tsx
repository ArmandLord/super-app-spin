import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { TicketCardStyle } from "../../styles/TicketStyles/Ticket.styles";
import Card from "../../../femsaComponents/components/Card/Card";
import Text from "../../../femsaComponents/components/Text/Text";



const TicketCard = () => {
    return (
        <View style={TicketCardStyle.container}>
            <View style={TicketCardStyle.tabContainer}>
                <Image source={require('../../assets/Allies/VolarisLogo.png')}
                    style={TicketCardStyle.image} />
                <View style={TicketCardStyle.tab} />
            </View>
        </View>
    )
}

export default TicketCard;