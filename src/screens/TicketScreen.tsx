import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import TransactionCard from '../components/Card/components/TransactionCard';
import Pill from '../components/Pill';
import { TouchableOpacity } from 'react-native-gesture-handler';

const partnetDefault = {
    entity: 'Volaris'
}

const TicketScreen = () => {
  const imgVolaris = require('../assets/Movimientos/volaris.png');
  const copyIcon = require('../assets/copy-icon.png');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.overlayer} />
        <TransactionCard title={partnetDefault.entity} image={imgVolaris} styleContent={styles.card}>
          <Text style={styles.description}>Toca el ícono para copiar el certificado de regalo o escríbelo desde la app o página web de {partnetDefault.entity}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
            <Pill styleContent={styles.pill}>
              <View>
                <Text style={styles.textGiftCertificate}>Certificado de regalo</Text>
                <Text style={styles.numberGiftCertificate}>42738499092812000</Text>
              </View>
              <View style={styles.copyIconContent}>
                <Image source={copyIcon} style={styles.copyIcon} />
              </View>
            </Pill>
          </TouchableOpacity>
        </TransactionCard>
      </View>
    </>
  )
}

export default TicketScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
    },
    overlayer: {
        backgroundColor: '#087D6F',
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        minHeight: 116,
    },
    card: {
        paddingBottom: 16,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
    },
    pill: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
    },
    copyIconContent: {
        padding: 12,
    },
    copyIcon: {
        width: 24,
        height: 24,
    },
    textGiftCertificate: {
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 4,
    },
    numberGiftCertificate: {
        fontSize: 16,
        fontWeight: '600',
    },
});