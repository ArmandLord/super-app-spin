import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomCardProps {
  title: string;
  value: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, value }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.card, { backgroundColor: isSelected ? '#E0E0FF' : '#F5F5F7' }]}
      >
        <Text
          style={[
            styles.cardText,
            { color: isSelected ? '#1723D3' : '#000' },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <Text style={styles.pointsText}>{value} puntos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
    marginVertical: 10,
  },
  card: {
    width: 164,
    height: 44,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 12,
    color: '#69698B',
    marginTop: 6,
  },
});

export default CustomCard;
