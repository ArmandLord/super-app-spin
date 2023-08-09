import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Disclaimer from '../components/Disclaimer/Disclaimer';
import AlertIcon from "../assets/Alert.png";
import TextInput from '../components/atoms/TextInput';
import InfoIcon from "../assets/info.png";
import BaseChip from '../components/atoms/Chip/BaseChip';
import PointsIcon from '../assets/svg/icon.png';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const BalanceScreen = () => {
    const points = 1001; // Cantidad de puntos
    const formattedPoints = points.toLocaleString(); // Formatear puntos en miles
    const pointsValue = (points / 10).toFixed(2); // Cantidad de pesos

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.pointsContainer}>
                        <View style={styles.pointsTextContainer}>
                            <Text style={styles.pointsText}>{formattedPoints} puntos</Text>
                            <Image source={InfoIcon} style={[styles.infoIcon, styles.infoIconMargin]} />
                        </View>
                    </View>
                    <BaseChip
                        text={`Valen $${pointsValue}`}
                        selected={true}
                        backgroundColor="#C9E9F3"
                        borderColor="#C9E9F3"
                        leftIcon={PointsIcon}
                    />
                    <View style={styles.divider} />
                    <Text>Escribe el valor de los puntos que quieres cambiar</Text>
                    <TextInput variant="default" placeholder="Monto en pesos" />
                    <Text>El valor mínimo que puedes cambiar es $20.00</Text>

                    <Disclaimer
                        variant="warning"
                        text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
                        icon={AlertIcon}
                        iconColor="#955000"
                        backgroundColor="#FFDFBC"
                        textColor="#05053D"
                    />

                    {points > 1000 && (
                        <View>
                            <Card variant="content-inline" title="Canjear $50 pesos (500 puntos)" />
                            <Card variant="content-inline" title="Canjear $100 pesos (1000 puntos)" />
                            {points > 10000 && (
                                <View>
                                    <Card variant="content-inline" title="Canjear $200 pesos (2000 puntos)" />
                                    <Card variant="content-inline" title="Canjear $500 pesos (5000 puntos)" />
                                </View>
                            )}
                        </View>
                    )}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button text="Continuar" variant="primary" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    pointsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    pointsTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
    },
    pointsText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    infoIcon: {
        tintColor: "#1723D3",
        width: 20,
        height: 20,
    },
    infoIconMargin: {
        marginLeft: 8,
    },
    divider: {
        height: 1,
        backgroundColor: '#E1E1E1',
        marginVertical: 10,
    },
    buttonContainer: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
});

export default BalanceScreen;
