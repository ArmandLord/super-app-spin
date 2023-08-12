import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import TransactionCard from '../components/Card/components/TransactionCard';
import Pill from '../components/Pill';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';
import { getWidth, setFormatMoney, setLegibleDate } from '../utils';
import TransactionView from '../components/Transactions/TransactionView';
import Hr from '../components/Hr';
import Button from '../components/Button/Button';
import SecondaryButton from '../components/Button/components/SecondaryButton';
import ModalHelp from '../components/Modal/ModalHelp';
import { useNavigation } from '@react-navigation/native';
import { TItem } from '@sas/types/transactions';

type TypeProps = {
  route: {
    params: TItem,
  },
}

const TicketScreen = (props: TypeProps) => {

  const transaction = props.route.params;

  const imgDoniatota = require('../assets/Movimientos/doniatota.png');
  const imgOxxo = require('../assets/Movimientos/oxxo.png');
  const imgOxxogas = require('../assets/Movimientos/oxxogas.png');
  const imgPuntos = require('../assets/Movimientos/puntos.png');
  const imgSpin = require('../assets/Movimientos/spin.png');
  const imgVolaris = require('../assets/Movimientos/volaris.png');
  const imgSmart = require('../assets/smart.png');
  const imgVix = require('../assets/vix.png');
  const copyIcon = require('../assets/copy-icon.png');
  const checkIcon = require('../assets/check-circle.png');

  const [showAlertInfo, setShowAlertInfo] = useState(false);
  const {navigate} = useNavigation();

  const setImage = () => {
    switch (transaction.entity) {
      case 'Recuperación de tus puntos':
        return imgSpin;
      case 'OXXO':
        return imgOxxo;
      case 'Enviaste puntos':
        return imgPuntos;
      case 'OXXO Gas':
        return imgOxxogas;
      case 'Doña tota':
        return imgDoniatota;
      case 'Volaris':
        return imgVolaris;
      case 'Smart Fit':
        return imgSmart;
      case 'VIX':
        return imgVix;
      default:
        return null;
    }
  }

  const copyToClipboard = () => {
    if (transaction.giftCode) {
      Clipboard.setString(transaction.giftCode);
    }
  };

  return (
    <>
      <View style={styles.overlayer} />
      {showAlertInfo === true && <View style={styles.alertContent}>
        <Image source={checkIcon} style={styles.alertIcon}/>
        <Text style={styles.alertText}>¡Listo! Cambiaste tus puntos</Text>
      </View>}
      <ScrollView>
        <View style={styles.container}>
          <TransactionCard title={transaction.entity} image={setImage()} styleContent={styles.card}>
            <Text style={styles.description}>Toca el ícono para copiar el certificado de regalo o escríbelo desde la app o página web de {transaction.entity}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={copyToClipboard}>
              <Pill styleContent={styles.pill}>
                <View>
                  <Text style={styles.textGiftCertificate}>Certificado de regalo</Text>
                  <Text style={styles.numberGiftCertificate}>{transaction.giftCode}</Text>
                </View>
                <View style={styles.copyIconContent}>
                  <Image source={copyIcon} style={styles.copyIcon} />
                </View>
              </Pill>
            </TouchableOpacity>
          </TransactionCard>

          <ModalHelp />

          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={[styles.col, styles.label]}>Puntos cambiados:</Text>
              <Text style={[styles.col, styles.value]}>{transaction.points}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.col, styles.label]}>Valen:</Text>
              <Text style={[styles.col, styles.value]}>{setFormatMoney(transaction.points/10)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.col, styles.label]}>Fecha:</Text>
              <Text style={[styles.col, styles.value]}>{setLegibleDate(transaction.date)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.col, styles.label]}>Válido desde el:</Text>
              <Text style={[styles.col, styles.value]}>{setLegibleDate(transaction.expiryDate)}</Text>
            </View>
          </View>

          
          {transaction.transactionNo && <>
            <Hr/>
              <TransactionView transactionNo={transaction.transactionNo}/>
            <Hr/>
          </>}

          <View style={styles.useBtn}>
            <Button text="Usar certificado de regalo" onPress={() => setShowAlertInfo(!showAlertInfo)} styleText={styles.styleTextBtn} />
          </View>
          <View style={styles.saveBtn}>
            <SecondaryButton text="Guardar para otro momento" onPress={() => navigate('PointsScreen')} styleText={styles.styleTextBtn} />
          </View>
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

    alertContent: {
        flexDirection: 'row',
        marginHorizontal: getWidth(16),
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: '#1E1E50',
        borderRadius: 12,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        flex: 1,
        width: getWidth(328),
        top: 0,
    },
    alertIcon: {
        width: 12,
        height: 12,
    },
    alertText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '400',
        marginLeft: 12,
    },

    card: {
        marginTop: 78 / 2 + 5,
        paddingBottom: 16,
    },
    description: {
        fontSize: 14,
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
        fontWeight: '400',
        marginBottom: 4,
    },
    numberGiftCertificate: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    col: {
        marginBottom: 8,
        height: 32,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '400',
        alignSelf: 'flex-start'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        alignSelf: 'flex-end'
    },
    table: {
        marginTop: 14
    },
    useBtn: {
        marginTop: 16
    },
    saveBtn: {
        marginTop: 12
    },
    styleTextBtn: {fontFamily: 'Poppins'}
});