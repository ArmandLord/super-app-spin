import React, { useRef } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Disclaimer from '../components/Disclaimer/Disclaimer';
import AlertIcon from "../assets/Alert.png";
import TextInput from '../components/atoms/TextInput';
import InfoIcon from "../assets/info.png";
import BaseChip from '../components/atoms/Chip/BaseChip';
import PointsIcon from '../assets/svg/icon.png';
import Button from '../components/Button/Button';
import CustomCard from '../components/Card/components/CustomCard';

import { useNavigation } from '@react-navigation/native';
import PointCounter from '../components/Card/components/PointCounter';

const BalanceScreen = () => {
    const { navigate } = useNavigation();
    const points = 9999;
    const formattedPoints = points.toLocaleString();
    const pointsValue = (points / 10).toFixed(2);
    const numericInputRef = useRef(null);
    const handleInputChange = (text) => {
        console.log('Texto ingresado:', text);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
              <View style={styles.pointsContainer}>
                <View style={styles.pointsTextContainer}>
                  <Text style={styles.pointsText}>{formattedPoints} puntos</Text>
                  <Image
                    source={InfoIcon}
                    style={[styles.infoIcon, styles.infoIconMargin]}
                  />
                </View>
              </View>
              <PointCounter value={pointsValue} />
              <View style={styles.divider} />
              <Text style={styles.pointsInputLabel}>
                Escribe el valor de los puntos que quieres cambiar
              </Text>
              {points > 1000 ? (
                <View>
                  <View style={styles.cardsContainer}>
                    {points > 1000 && points <= 10000 && (
                      <View style={styles.cardRow}>
                        <CustomCard title="$50" value="500" />
                        <CustomCard title="$100" value="1000" />
                      </View>
                    )}
                    {points > 10000 && (
                      <View style={styles.cardRow}>
                        <View style={styles.cardColumn}>
                          <CustomCard title="$50" value="500" />
                          <CustomCard title="$200" value="2000" />
                        </View>
                        <View style={styles.cardColumn}>
                          <CustomCard title="$100" value="1000" />
                          <CustomCard title="$500" value="5000" />
                        </View>
                      </View>
                    )}
                  </View>
                  <Text style={styles.otherInput}>Otro:</Text>
                  <TextInput
                    ref={numericInputRef}
                    variant="numeric"
                    onChangeText={handleInputChange}
                    placeholder="Monto en pesos"
                  />
                  {points > 10000 && (
                    <Text style={styles.maxValueText}>
                      El valor máximo que puedes cambiar es $1,000.00
                    </Text>
                  )}
                </View>
              ) : (
                <TextInput
                  ref={numericInputRef}
                  variant="numeric"
                  onChangeText={handleInputChange}
                  placeholder="Monto en pesos"
                />
              )}
              {points < 200 && (
                <View style={styles.disclaimerContainer}>
                  <Disclaimer
                    text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
                    icon={AlertIcon}
                    iconColor="#955000"
                    backgroundColor="#FFDFBC"
                    textColor="#05053D"
                  />
                </View>
              )}
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              text="Continuar"
              variant="primary"
              onPress={() => navigate('TicketScreen')}
            />
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
    marginBottom: 8,
  },
  pointsText: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  infoIcon: {
    tintColor: '#1723D3',
    width: 24,
    height: 24,
  },
  infoIconMargin: {
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E1E1E1',
    marginVertical: 18,
  },
  minimumValueText: {
    color: '#69698B',
    fontSize: 12,
    fontFamily: 'Poppins',
    marginLeft: 12,
  },
  pointsInputLabel: {
    fontSize: 18,
    fontFamily: 'Poppins',
    marginBottom: 10,
    textAlign: 'left',
  },
  minValueContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  disclaimerContainer: {
    marginTop: 10,
  },
  bottomText: {
    marginTop: 20,
  },
  cardsContainer: {
    marginVertical: 20,
  },
  cardColumn: {},
  otherInput: {
    fontSize: 18,
    fontFamily: 'Poppins',
    marginBottom: 18,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otherInputAbove: {
    fontSize: 16,
    fontFamily: 'Poppins',
    marginBottom: 6,
  },
  buttonContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  maxValueText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins',
    marginLeft: 12,
  },
});

export default BalanceScreen;
