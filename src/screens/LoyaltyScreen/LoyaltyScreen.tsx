import React from "react";
import { Image } from "react-native";
import StackedCardGrid from "../../../femsaComponents/GridView/StackedCardGrid";
import { StackedCardProps } from "../../types/LoyaltyTypes";
import { styles } from "../../styles/LoyaltyScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import LoyaltyCard from "../../components/LoyaltyCard/LoyaltyCard";
import { ScrollView } from "react-native-gesture-handler";

const historial = require('../../assets/Loyalty/Historial.png');
const changePoints = require('../../assets/Loyalty/ChangePoints.png')

function LoyaltyScreen() {

    const points = require("../../assets/Loyalty/Points.png");
    const products = require('../../assets/Loyalty/Products.png');
    const buy = require('../../assets/Loyalty/Buy.png');

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
        <SafeAreaView >
            <ScrollView style={styles.scrollView}>
                <StackedCardGrid data={data} titlesSize="default" containerStyle={styles.containerStyle} itemsStyle={styles.itemsStyle} numberOfColumns={2} />
                <LoyaltyCard title={'Acomula productos'} subTitle={'Llévate tus favoritos de regalo al juntar tus sellos'} url={points} />
                <LoyaltyCard title={'Gana más puntos'} subTitle={'Muy pronto podrás ganar más puntos en el total de tu compra'} url={products} />
                <LoyaltyCard title={'Suma al comprar'} subTitle={'Muy pronto podrás acumular compras y llevarte productos de regalo'} url={buy} />
            </ScrollView>
        </SafeAreaView>)
}

export default LoyaltyScreen;