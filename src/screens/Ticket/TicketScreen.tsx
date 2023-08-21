import React from "react";
import { TicketStyle } from "../../styles/TicketStyles/Ticket.styles";
import TicketCard from "../../components/TicketScreenComponents/TicketCard";
import TicketBackground from "../../components/TicketScreenComponents/TicketBackground";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../../femsaComponents/components/Text/Text";
import TicketInfo from "../../components/TicketScreenComponents/TicketInfo";
import Button from "../../../femsaComponents/components/Button/Button";

function TicketScreen() {

    return (
        <View style={TicketStyle.container}>
            <TicketBackground />
            <SafeAreaView style={TicketStyle.safe}>
                <View style={TicketStyle.content}>
                    <Text children={'Detalle del movimiento'} style={TicketStyle.title} />
                    <TicketCard />
                    <TicketInfo />
                    <View style={{ borderWidth: 1, borderColor: '#E6E6EC', width: '150%', marginLeft: -50 }} />
                    <Text children={'Número de transacción'} style={TicketStyle.text1} />
                    <Text children={'5dced89c-2b6e-4a1c-a715-c19b0a51'} style={TicketStyle.text2} />
                    <View style={{ borderWidth: 1, borderColor: '#E6E6EC', width: '150%', marginLeft: -50, marginBottom: 20 }} />
                    <Button text={"Usar certificado de regalo"} onPress={() => { console.log('aqui') }} variant="primary" />
                    <View style={{marginVertical: 5}}/>
                    <Button text={"Guardar para otro momento"} onPress={() => { console.log('aqui') }} variant="secondary" />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default TicketScreen;