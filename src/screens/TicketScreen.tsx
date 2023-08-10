import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import TransactionCard from '../components/Card/components/TransactionCard';
import Pill from '../components/Pill';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';
import HyperlinkButton from '../components/Button/components/HyperlinkButton';
import GridView from '../components/GridView/GridView';
import { setFormatMoney, setLegibleDate } from '../utils';
import TransactionView from '../components/Transactions/TransactionView';
import Hr from '../components/Hr';

const partnetDefault = {
    entity: 'Volaris',
    fiftCertificate: '42738499092812000',
    points: 10,
    transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
}

const TicketScreen = () => {
  const imgVolaris = require('../assets/Movimientos/volaris.png');
  const copyIcon = require('../assets/copy-icon.png');

  const copyToClipboard = () => {
    Clipboard.setString(partnetDefault.fiftCertificate);
  };

  const items = [
    <Text style={[styles.col, styles.label]}>Puntos cambiados:</Text>,
    <Text style={[styles.col, styles.value]}>{partnetDefault.points}</Text>,
    <Text style={[styles.col, styles.label]}>Valen:</Text>,
    <Text style={[styles.col, styles.value]}>{setFormatMoney(100)}</Text>,
    <Text style={[styles.col, styles.label]}>Fecha:</Text>,
    <Text style={[styles.col, styles.value]}>{setLegibleDate('2023-08-10')}</Text>,
    <Text style={[styles.col, styles.label]}>Válido desde el:</Text>,
    <Text style={[styles.col, styles.value]}>{setLegibleDate('2023-08-10')}</Text>
  ];

  return (
    <>
      <View style={styles.overlayer} />
      <ScrollView>
        <View style={styles.container}>
          <TransactionCard title={partnetDefault.entity} image={imgVolaris} styleContent={styles.card}>
            <Text style={styles.description}>Toca el ícono para copiar el certificado de regalo o escríbelo desde la app o página web de {partnetDefault.entity}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={copyToClipboard}>
              <Pill styleContent={styles.pill}>
                <View>
                  <Text style={styles.textGiftCertificate}>Certificado de regalo</Text>
                  <Text style={styles.numberGiftCertificate}>{partnetDefault.fiftCertificate}</Text>
                </View>
                <View style={styles.copyIconContent}>
                  <Image source={copyIcon} style={styles.copyIcon} />
                </View>
              </Pill>
            </TouchableOpacity>
          </TransactionCard>

          <HyperlinkButton
          text="¿Cómo usar mi certificado de regalo?"
          onPress={() => {}}
          style={styles.hyperlinkBtn}
          styleText={styles.hyperlinkBtnText} />

          <View style={styles.table}>
            <GridView data={items} />
          </View>

          <Hr/>
          <TransactionView transactionNo={partnetDefault.transactionNo}/>
          <Hr/>
        </View>
      </ScrollView>
    </>
  )
}

export default TicketScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        // backgroundColor: '#ffffff',
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
        marginTop: 78 / 2 + 5,
        paddingBottom: 16,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 5,
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
    hyperlinkBtn: {
        marginTop: 5,
    },
    hyperlinkBtnText: {
        color: '#1723D3',
        fontSize: 14,
        fontWeight: '600',
    },
    col: {
        marginBottom: 8,
        height: 32,
    },
    label: {
        fontSize: 16,
        fontWeight: '400',
        alignSelf: 'flex-start'
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'flex-end'
    },
    table: {
        marginTop: 14
    },
});