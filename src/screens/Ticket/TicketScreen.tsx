import React from "react";
import { TicketStyle } from "../../styles/TicketStyles/Ticket.styles";
import TicketCard from "../../components/TicketScreenComponents/TicketCard";
import TicketBackground from "../../components/TicketScreenComponents/TicketBackground";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../../femsaComponents/components/Text/Text";

function TicketScreen() {

    return (
        <View style={TicketStyle.container}>
            <TicketBackground />
            <SafeAreaView style={TicketStyle.safe}>
                <View style={TicketStyle.content}>
                    <Text children={'Detalle del movimiento'} style={TicketStyle.title} />
                    <TicketCard />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default TicketScreen;