import React, { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card/Card";
import { TItem } from "../types/transactions";
import Chip from "../components/atoms/Chip";
import TransactionCard from "../components/Card/components/TransactionCard";
import Pill from "../components/Pill";
import { setFormatMoney } from "../utils";
import TransactionView from "../components/Transactions/TransactionView";
import Hr from "../components/Hr";
import GridView from "../components/GridView/GridView";

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

  const setAmount = (points: number) => setFormatMoney(points/10);

  const setDate = (date: string | undefined) => {
    if (date) {
      const Idate = new Date(date);
      return `${Idate.getDate()}/${Idate.getMonth()}/${Idate.getFullYear()}`
    }
    return '';
  }

  const items = [
    <Text style={[styles.col, styles.label]}>Monto total:</Text>,
    <Text style={[styles.col, styles.value]}>{setAmount(transaction.points)}</Text>,
    <Text style={[styles.col, styles.label]}>Fecha:</Text>,
    <Text style={[styles.col, styles.value]}>{setDate(transaction.date)}</Text>,
    <Text style={[styles.col, styles.label]}>Úsalo desde el:</Text>,
    <Text style={[styles.col, styles.value]}>{setDate(transaction.expiryDate)}</Text>,
  ];
  
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

      {/* <View style={styles.table}> */}
        <GridView data={items} containerStyle={styles.table} />
      {/* </View> */}

      <Hr/>

      <TransactionView transactionNo={transaction.transactionNo}/>
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
    fontFamily: 'Poppins',
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
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: '#05053D'
  },
  pointsSymbol: {
    fontSize: 24,
    fontFamily: 'Poppins',
    color: '#1723D3',
    fontWeight: '700',
  },
  col: {
    marginBottom: 8,
    height: 32,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    alignSelf: 'flex-start',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  table: {
    marginTop: 30,
  },
})