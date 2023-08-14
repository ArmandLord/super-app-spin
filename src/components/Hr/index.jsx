import React from 'react';
import { StyleSheet, View } from 'react-native';

const Hr = () => <View style={styles.hr} />;
export default Hr;

const styles = StyleSheet.create({
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6EC',
        marginLeft: -16,
        marginRight: -16,
    },
})