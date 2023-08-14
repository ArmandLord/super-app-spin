import React from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { TicketCardStyle } from "../../styles/TicketStyles/Ticket.styles";
import Card from "../../../femsaComponents/components/Card/Card";
import Text from "../../../femsaComponents/components/Text/Text";
import useTheme from "../../../femsaComponents/hooks/useTheme";


const TicketCard = () => {

    const { colors } = useTheme();

    return (
        <View style={TicketCardStyle.container}>
            <Card style={{ height: 200, width: '100%' }} contentStyle={{ alignItems: 'center' }}>
                <Card style={TicketCardStyle.imageContainer} contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={TicketCardStyle.logo} source={require('../../assets/Allies/VolarisLogo.png')} />
                </Card>
                <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flex: 1, width: '90%' }}>
                    <Text style={TicketCardStyle.title} children={'Volaris'} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text children={'Toca el ícono para copiar el certificado de regalo o escríbelo desde la app o página web de Volaris'} />
                    </View>
                    <View style={{ backgroundColor: '#F5F5F7', borderRadius: 14, elevation: 1, flexDirection: 'row', height: 56, alignContent: 'center', width: '100%', justifyContent: 'center', marginBottom: 10, marginTop: 10 }}>
                        <View style={{ alignSelf: 'flex-start', flexDirection: 'column', flex: 2, marginTop: 10, marginLeft: 10 }}>
                            <Text children={'Certificado de regalo'} style={{ fontWeight: '600', fontSize: 12, lineHeight: 16, }} />
                            <Text children={'42738499092812000'} style={{ fontWeight: '600', fontSize: 16, lineHeight: 16, }} />
                        </View>
                        <Image source={require('../../assets/Icon.png')} style={{ right: 0, marginTop: 15, marginRight: 10 }} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default TicketCard;