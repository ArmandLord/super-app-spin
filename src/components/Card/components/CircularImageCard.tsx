import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import RightArrowIcon from '../../../assets/rightArrow.png';

interface CircularImageCardProps {
  title: string;
  subtitle: string;
  image: any;
  onPress: () => void;
}

const CircularImageCard: React.FC<CircularImageCardProps> = ({
  title,
  subtitle,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.circularImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <Image source={RightArrowIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 10,
  },
  circularImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});

export default CircularImageCard;
