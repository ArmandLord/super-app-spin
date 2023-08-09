import React from "react";
import { TItem } from "../../types/transactions";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const ItemList = ({entity, date, points, id}: TItem) => {

  const imgDoniatota = require('../../assets/Movimientos/doniatota.png');
  const imgOxxo = require('../../assets/Movimientos/oxxo.png');
  const imgOxxogas = require('../../assets/Movimientos/oxxogas.png');
  const imgPuntos = require('../../assets/Movimientos/puntos.png');
  const imgSpin = require('../../assets/Movimientos/spin.png');
  const imgVolaris = require('../../assets/Movimientos/volaris.png');

  const daysNames = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

  const {navigate} = useNavigation();

  const setDate = (date: string) => {
    const IDate = new Date(date);
    return `${daysNames[IDate.getDay()]} ${IDate.getDate()}`;
  }

  const setImage = () => {
    switch (entity) {
      case 'Recuperación de tus puntos':
        return imgSpin;
      case 'OXXO':
        return imgOxxo;
      case 'Enviaste puntos':
        return imgPuntos;
      case 'OXXO Gas':
        return imgOxxogas;
      case 'Doña tota':
        return imgDoniatota;
      case 'Volaris':
        return imgVolaris;
      default:
        return null;
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('TransactionsDetailsScreen', {transactionId: id})}>
      <View style={styles.container}>
        <Image source={setImage()} style={styles.thumbnail}/>
        <View style={styles.info}>
          <Text>{entity}</Text>
          <Text>{setDate(date)}</Text>
        </View>
        <Text>{points > 0 ? `+ ${points}` : `- ${Math.abs(points)}`}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6EC',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  thumbnail: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  info: {
    flex: 1,
  }
});