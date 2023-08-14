import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface PointCounterProps {
  value: string;
}

const PointCounter: React.FC<PointCounterProps> = ({ value }) => {
  const PointsIcon = require('../../../assets/svg/icon.png')
  return (
    <View style={styles.container}>
      <Image source={PointsIcon} style={styles.icon} />
      <Text style={styles.text}>Valen ${value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    height: 28,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#C9E9F3',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#006686',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006686',
  },
});

export default PointCounter;
