import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Text from '../components/Text/Text';
import iconLogout from '../assets/logout.png';
import iconAccount from '../assets/svg/account.png';

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Cuenta</Text>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>Maria Florencia</Text>
          <Image source={iconAccount} style={styles.accountIcon} />
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>1,200 puntos</Text>
        </View>
        <Text style={styles.otherActions}>Otras acciones</Text>
        <View style={styles.logoutContainer}>
          <Image source={iconLogout} style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Cierra sesión</Text>
        </View>
        <View style={styles.versionContainer}>
          <Text style={styles.version}>Versión: 1.203.430.983</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Puedes ajustar el color de fondo aquí
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  usernameContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  username: {
    fontSize: 24,
    marginRight: 10,
    fontWeight: 'bold',
  },
  accountIcon: {
    width: 120,
    height: 120,
  },
  pointsContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#C9E9F3',
    marginBottom: 50,
  },
  pointsText: {
    fontSize: 16,
    color: '#006686',
    fontWeight: '700',
  },
  otherActions: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 25,
    color: '#05053D',
  },
  logoutContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#05053D',
  },
  versionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  version: {
    fontSize: 12,
    color: '#B4B4C5',
    textAlign: 'center',
  },
});

export default AccountScreen;
