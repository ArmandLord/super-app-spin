import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, SectionList } from "react-native";
import ItemList from "../components/Transactions/ItemList";
import { Items } from "../types/transactions";
import Button from "../components/Button/Button";
import FilterBtns from "../components/Transactions/FilterBtns";

const Transactions = () => {

  const [items, setItems] = useState([]);

  const monthsNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  useEffect(() => {
    axios.get('http://localhost:3001/history')
    .then(res => {
        
      console.log('res.data --> ', res.data);
        const data = setGroupItems(res.data);
        console.log('data --> ', data);
        
        setItems(data);
    })
    .catch(err => {
        console.log(err);
    });
  }, []);

  const setGroupItems = (items:Items) => {
    let newItems = {};

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    const lastMonth = new Date(today);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const twoMonthsAgo = new Date(today);
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    const groupedDates = [
      {
        title: 'Hoy',
        data: [],
      },
      {
        title: 'Ayer',
        data: [],
      },
      {
        title: 'Semana anterior',
        data: [],
      },
      {
        title: monthsNames[lastMonth.getMonth()],
        data: [],
      },
      {
        title: monthsNames[twoMonthsAgo.getMonth()],
        data: [],
      }
    ];

    items.map((item) => {
      const currentDate = new Date(item.date);
    
      if (currentDate.toDateString() === today.toDateString()) {
        groupedDates[0].data.push(item);
      } else if (currentDate.toDateString() === yesterday.toDateString()) {
        groupedDates[1].data.push(item);
      } else if (currentDate >= lastWeek) {
        groupedDates[2].data.push(item);
      } else if (currentDate >= lastMonth) {
        groupedDates[3].data.push(item);
      } else if (currentDate >= twoMonthsAgo) {
        groupedDates[4].data.push(item);
      }
    })

    return groupedDates;
  }

  return (
    <View style={styles.container}>
      <FilterBtns />
      <SectionList
        sections={items}
        renderItem={({item}) => (<ItemList entity={item.entity} id={item.id} date={item.date} points={item.points} />)}
        keyExtractor={item => String(item.id)}
        initialNumToRender={10}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.headerGroup}>{title}</Text>
        )}
        ListFooterComponent={<View style={styles.space} />}
      />
    </View>
  );
}

export default Transactions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    space: {
      height: 40
    },
    headerGroup: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      color: '#05053D',
      fontSize: 14,
      fontWeight: '600'
    }
});