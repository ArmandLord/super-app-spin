import React from "react";
import { Image, View } from "react-native";
import { StackedCardProps } from "../../types/LoyaltyTypes";
import { styles } from "../../styles/LoyaltyStyles/LoyaltyScreen.style";
import { ScrollView } from "react-native-gesture-handler";
import CardGrid from "../../components/LoyaltyScreenComponents/CardGrid/CardGrid";
import LoyaltyCard from "../../components/LoyaltyScreenComponents/LoyaltyCard/LoyaltyCard";
import AcomulatedPoints from "../../components/LoyaltyScreenComponents/AcomulatedPoints/AcomulatedPoints";
import Banner from "../../../femsaComponents/components/molecules/Banner";
import BannerCarousel from "../../../femsaComponents/components/molecules/BannerCarousel";
import { useNavigation } from "@react-navigation/native";

const historial = require('../../assets/Loyalty/Historial.png');
const changePoints = require('../../assets/Loyalty/ChangePoints.png')

function LoyaltyScreen() {

    const points = require("../../assets/Loyalty/Points.png");
    const products = require('../../assets/Loyalty/Products.png');
    const buy = require('../../assets/Loyalty/Buy.png');
    const navigation = useNavigation()
    const data: StackedCardProps[] = [
        {
            title: 'Consulta tu historial',
            icon: <Image source={historial} />,
            onPress: () => navigation.navigate('Movimientos')
        },
        {
            title: 'Cambiá tus puntos',
            icon: <Image source={changePoints} />,
            onPress: () => console.log('hello word')
        },
    ];

    return (
        <ScrollView style={styles.scrollView}>
            <View style={{ paddingHorizontal: 24 }}>
                <AcomulatedPoints points={"123"} money={"123"} />
                <CardGrid data={data} titlesSize="default" />
                <LoyaltyCard title={'Acomula productos'} subTitle={'Llévate tus favoritos de regalo al juntar tus sellos'} url={points} />
                <LoyaltyCard title={'Gana más puntos'} subTitle={'Muy pronto podrás ganar más puntos en el total de tu compra'} url={products} />
                <LoyaltyCard title={'Suma al comprar'} subTitle={'Muy pronto podrás acumular compras y llevarte productos de regalo'} url={buy} />
            </View>
            <View style={{ paddingBottom: 30 }}>
                <BannerCarousel banners={banners} />
            </View>
        </ScrollView>

    )
}
const banners: any[] = [
    {
        id: 1,
        title: 'Vix contenido original',
        image: {
            uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
        },
        onPress: () => console.log('Banner 1'),
    },
    {
        id: 2,
        title: 'Oxxo premia',
        image: {
            uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
        },
        onPress: () => console.log('Banner 2'),
    },
    {
        id: 3,
        title: 'Vips',
        image: {
            uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
        },
        onPress: () => console.log('Banner 3'),
    },
];
export default LoyaltyScreen;