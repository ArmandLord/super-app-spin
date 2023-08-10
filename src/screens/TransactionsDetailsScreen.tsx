import React, { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card/Card";
import { TItem } from "../types/transactions";
import Chip from "../components/atoms/Chip";
import TransactionCard from "../components/Card/components/TransactionCard";
import Pill from "../components/Pill";

const defaultTransaction = {
  entity: '',
  date: '',
  expiryDate: '',
  points: 0,
  operation: '',
  transactionNo: '',
  giftCode: '',
  id: 0,
}

const TransactionsDetailsScreen = (props) => {

  const {data, fetchData} = useFetch();
  const [transaction, setTransaction] = useState<TItem>(defaultTransaction);
  
  const imgDoniatota = require('../assets/Movimientos/doniatota.png');
  const imgOxxo = require('../assets/Movimientos/oxxo.png');
  const imgOxxogas = require('../assets/Movimientos/oxxogas.png');
  const imgPuntos = require('../assets/Movimientos/puntos.png');
  const imgSpin = require('../assets/Movimientos/spin.png');
  const imgVolaris = require('../assets/Movimientos/volaris.png');

  useEffect(() => {
    fetchData(`?id=${props.route.params.transactionId}`);
  }, []);

  useEffect(() => {
    if (data[0]) {
      setTransaction(data[0]);
    }
  }, [data]);

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
    default:
        return null;
    }
  }

  const setAmount = (points: number) => new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(points/10);

  const setDate = (date: string | undefined) => {
    if (date) {
      const Idate = new Date(date);
      return `${Idate.getDate()}/${Idate.getMonth()}/${Idate.getFullYear()}`
    }
    return '';
  }
  
  return (
    <View style={styles.container}>
      <TransactionCard title={transaction.entity} image={setImage()}>
        <Pill>
          <Text style={styles.pillText}>En esta compra {transaction.points > 0 ? 'ganaste' : 'usaste'}:</Text>
        </Pill>
        
        <View style={styles.pointsContent}>
          <Text style={styles.pointsSymbol}>{transaction.points > 0 ? '+' : '-'}</Text>
          <Text style={styles.points}>{Math.abs(transaction.points)}</Text>
        </View>
      </TransactionCard>

      <View style={styles.infoContent}>
        <View style={styles.info}>
          <Text style={styles.label}>Monto total:</Text>
          <Text style={styles.value}>{setAmount(transaction.points)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.value}>{setDate(transaction.date)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Úsalo desde el:</Text>
          <Text style={styles.value}>{setDate(transaction.expiryDate)}</Text>
        </View>
      </View>

      <View style={styles.hr} />

      <View style={styles.transactionNoContent}>
        <Text style={styles.label}>Número de transacción</Text>
        <Text style={[styles.label, styles.transactionNo]}>{transaction.transactionNo}</Text>
      </View>
    </View>
  );
}

export default TransactionsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 16,
  },
  pillText: {
    fontSize: 16,
    fontWeight: '400',
  },
  pointsContent: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    fontSize: 40,
    fontWeight: '500',
    color: '#05053D'
  },
  pointsSymbol: {
    fontSize: 24,
    color: '#1723D3',
    fontWeight: '700',
  },
  infoContent: {
    marginTop: 25.35,
    paddingBottom: 8,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    height: 32,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6EC',
    marginLeft: -16,
    marginRight: -16,
  },
  transactionNo: {
    color: '#69698B',
  },
  transactionNoContent: {
    marginTop: 8,
    minHeight: 72,
    justifyContent: 'space-evenly',
  }
})