import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card/Card';
import volarisImage from '../assets/volaris.png';
import { useNavigation } from '@react-navigation/native';

const brands = [
  {
    id: 1,
    name: "American Airlines",
    role: "Aerolínea",
    image: volarisImage
  },
  {
    id: 2,
    name: "Delta Air Lines",
    role: "Aerolínea",
    image: volarisImage
  },
  {
    id: 3,
    name: "Volaris",
    role: "Aerolínea",
    image: volarisImage
  },
  // ... otros datos de marcas
];

const PointsScreen = () => {
    const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text>Elige la marca aliada en la que quieres usar tus puntos</Text>
          {brands.map(brand => (
            <Card
              key={brand.id}
              variant="content-image"
              title={brand.name}
              subtitle={brand.role}
              image={brand.image}
              // Otras props según tus necesidades
              onPress={() => navigate('BalanceScreen')}
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
});

export default PointsScreen;
