import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemList from "../components/Transactions/ItemList";
import { Items } from "../types/transactions";
import Button from "../components/Button/Button";
import FilterBtns from "../components/Transactions/FilterBtns";

const Transactions = () => {

  const [items, setItems] = useState<Items>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/history')
    .then(res => {
        console.log('res.data --> ', res.data);
        
        setItems(res.data);
    })
    .catch(err => {
        console.log(err);
    });
  }, []);


  return (
    <View style={styles.container}>
      <FilterBtns />
      <FlatList
        data={items}
        renderItem={({item}) => (<ItemList entity={item.entity} id={item.id} date={item.date} points={item.points} />)}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

export default Transactions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
});