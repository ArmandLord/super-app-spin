import React from "react";
import Text from "../../../femsaComponents/components/Text/Text";
import { View } from "react-native";
import { TicketInfoStyle } from "../../styles/TicketStyles/Ticket.styles";

const TicketInfo = () => {
    return (
        <View style={TicketInfoStyle.container}>
            <Text children={'¿Cómo usar mi certificado de regalo?'} style={TicketInfoStyle.howToUse} />
            <View style={{ flexDirection: 'column', width: '100%' }}>
                <View style={TicketInfoStyle.textContainer}>
                    <Text children={'Puntos cambiados:'} style={TicketInfoStyle.leftText} />
                    <Text children={'500'} style={TicketInfoStyle.rigthText} />
                </View>
                <View style={TicketInfoStyle.textContainer}>
                    <Text children={'Valen:'} style={TicketInfoStyle.leftText} />
                    <Text children={'$50.00'} style={TicketInfoStyle.rigthText} />
                </View>
                <View style={TicketInfoStyle.textContainer}>
                    <Text children={'Fecha:'} style={TicketInfoStyle.leftText} />
                    <Text children={'14 de Septiembre de 2023'} style={TicketInfoStyle.rigthText} />
                </View>
                <View style={[TicketInfoStyle.textContainer,{marginBottom: 20}]}>
                    <Text children={'Válido hasta el:'} style={TicketInfoStyle.leftText} />
                    <Text children={'Válido hasta el:'} style={TicketInfoStyle.rigthText} />
                </View>

            </View>
        </View>
    )
}

export default TicketInfo