import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CircularImageCard from '../components/Card/components/CircularImageCard';
import volarisImage from '../assets/volaris.png';
import smartImage from '../assets/smart.png';
import vixImage from '../assets/vix.png';
import { useNavigation } from '@react-navigation/native';

const brands = [
  {
    id: 1,
    name: "Volaris",
    role: "Movilidad",
    image: volarisImage
  },
  {
    id: 2,
    name: "Smart Fit",
    role: "Deportes",
    image: smartImage
  },
  {
    id: 3,
    name: "VIX",
    role: "Entretenimiento",
    image: vixImage
  },
];

const PointsScreen = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Elige la marca aliada en la que quieres usar tus puntos
          </Text>
          {brands.map(brand => (
            <CircularImageCard
              key={brand.id}
              title={brand.name}
              subtitle={brand.role}
              image={brand.image}
              onPress={() => navigate('BalanceScreen', {
                brand: brand.name
              })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    marginBottom: 15,
  },
});

export default PointsScreen;
