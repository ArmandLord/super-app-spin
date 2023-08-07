import React from "react";
import { Image } from "react-native";
import StackedCardGrid from "../../components/GridView/StackedCardGrid";
import { StackedCardProps } from "../../types/LoyaltyTypes";
import { styles } from "../../styles/LoyaltyScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../../components/NavBar/NavBar";
import LoyaltyCard from "../../components/LoyaltyCard/LoyaltyCard";

const historial = require('../../assets/Loyalty/Historial.png');
const changePoints = require('../../assets/Loyalty/ChangePoints.png')

function LoyaltyScreen() {

    const points = '../../assets/Loyalty/Points.png';
    const products = '../../assets/Loyalty/Products.png';
    const buy = '../../assets/Loyalty/Buy.png';

    const data: StackedCardProps[] = [
        {
            title: 'Consulta tu historial',
            icon: <Image source={historial} />,
            onPress: () => console.log('hello word')
        },
        {
            title: 'Cambiá tus puntos',
            icon: <Image source={changePoints} />,
            onPress: () => console.log('hello word')
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <NavBar variant={'default'} title="Beneficios" />
            <StackedCardGrid data={data} titlesSize="small" containerStyle={styles.containerStyle} itemsStyle={styles.itemsStyle} numberOfColumns={2} />
            <LoyaltyCard title={'Acomula productos'} subTitle={'Llévate tus favoritos de regalo al juntar tus sellos'} url={points} />
        </SafeAreaView>)
}

export default LoyaltyScreen;