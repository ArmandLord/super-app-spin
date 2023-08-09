import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card/Card";
import { TItem } from "../types/transactions";
import Chip from "../components/atoms/Chip";

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

  useEffect(() => {
    fetchData(`?id=${props.route.params.transactionId}`);
  }, []);

  useEffect(() => {
    console.log(data);
    setTransaction(data[0]);
  }, [data])
  
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.entity}>{transaction.entity}</Text>
        <View style={styles.labelContent}>
          <Text>En esta compra ganaste:</Text>
        </View>
      </Card>
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
  entity: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 8,
  },
  labelContent: {
    backgroundColor: '#F5F5F7',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    alignSelf: 'center',
    borderRadius: 16,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
  }
})