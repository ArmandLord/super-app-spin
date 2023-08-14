import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ContentBenefitProps {
  imageSource: any;
  title: string;
  onPress?: () => void;
}

const ContentBenefit: React.FC<ContentBenefitProps> = ({ imageSource, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 184,
    height: 244,
    padding: 18,
    paddingTop: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 0,
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.80,
    elevation: 5,
  },
  image: {
    marginVertical: 10,
    width: '110%',
    height: 'auto',
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContentBenefit;
