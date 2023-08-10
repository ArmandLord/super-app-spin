import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type transaction = {
    transactionNo: string
}

const TransactionView  = ({transactionNo}: transaction) => {
    return (
        <View style={styles.transactionNoContent}>
            <Text style={styles.label}>Número de transacción</Text>
            <Text style={[styles.label, styles.transactionNo]}>{transactionNo}</Text>
        </View>
    )
}

export default TransactionView

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '400',
      },
      value: {
        fontSize: 16,
        fontWeight: '600',
      },
    transactionNo: {
        color: '#69698B',
      },
      transactionNoContent: {
        marginTop: 8,
        marginBottom: 8,
        minHeight: 72,
        justifyContent: 'space-evenly',
      }
})