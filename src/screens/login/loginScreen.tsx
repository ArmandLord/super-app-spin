import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';

//FEMSA Components
import Text from '../../../femsaComponents/components/Text/Text';
import TextInput from '../../../femsaComponents/components/atoms/TextInput';
import Button from '../../../femsaComponents/components/Button/Button';

//Context
import { useMovementsContext } from '../../context/SuperAppContext';


const LoginScreen = () => {

  const { dispatch } = useMovementsContext(); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleLogin = () => {
    dispatch({
      type: 'SET_USER',
      payload: { user: { phoneNumber: Number(phoneNumber) }, isAuth: true },
    }); 
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Image source={require('../../assets/login/Splash2x.jpg')} style={styles.backgroundImage} />
      <View style={styles.centerContainer}>
        <Image source={require('../../assets/login/SpinPlusLogo.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Ahora OXXO a un click de distancia</Text>
      </View>
      <View style={styles.infoContainer}>
        <TextInput
            variant='numeric'
            label='🇲🇽 Número de celular'
            maxLength={14}
            placeholder="🇲🇽 Número de celular"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.infoText}>Al continuar reconoces ser mayor de edad, así como haber leído y aceptado nuestros Términos y Condiciones y nuestro Aviso de privacidad</Text>
          <Button
            variant="primary"
            onPress={handleLogin}
            text="Comenzar"
            size="medium"
          />
      </View>
      
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  infoText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#00000090',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 35,
    paddingHorizontal: 6,
    marginHorizontal: 15,
  },
  centerContainer: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 100,
  },
  logoImage: {
    width: 115,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  logoText: {
    fontSize: 45,
    fontWeight: '600',
    color: '#fff'
  },
});