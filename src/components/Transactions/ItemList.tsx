import React from "react";
import { Item } from "../../types/transactions";
import { View, Text, Image, StyleSheet } from "react-native";

const Image1 = require('../../assets/Transactions/graphic.png');

const ItemList = ({entity, date, points}: Item) => (
    <View style={styles.container}>
      <Image source={Image1} style={styles.thumbnail}/>
      <View style={styles.info}>
        <Text>{entity}</Text>
        <Text>{date}</Text>
      </View>
      <Text>{points > 0 ? `+ ${points}` : `- ${points}`}</Text>
    </View>
);

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 16,
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
  },
  info: {
    flex: 1,
  }
});