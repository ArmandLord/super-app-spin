import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import TextInput from '../atoms/TextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('screen').width;

const FilterBtns = (props) => {

  const [currentItem, setCurrentItem] = useState(0);

  const handleBtn = (index: number = 0) => {
    if (index !== currentItem) {
        setCurrentItem(index)
        if (index === 0) {
            props.allCallback();
        }
        if (index === 1) {
            props.gotCallback();
        }
        if (index === 2) {
            props.usedCallback();
        }
    }
  }
  
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={() => handleBtn(0)}>
            <View style={styles.tab}>
                <Text style={[styles.tabText, currentItem === 0 && styles.tabTextActive]}>Todos</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => handleBtn(1)}>
            <View style={styles.tab}>
                <Text style={[styles.tabText, currentItem === 1 && styles.tabTextActive]}>Ganados</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => handleBtn(2)}>
            <View style={styles.tab}>
                <Text style={[styles.tabText, currentItem === 2 && styles.tabTextActive]}>Usados</Text>
            </View>
        </TouchableOpacity>
        <View style={[styles.pointer, {left: (WIDTH/3)*currentItem}]} />
    </View>
  )
};

export default FilterBtns;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        zIndex: 1,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 4,
          },
          android: {
            elevation: 4,
          },
        }),
    },
    tab: {
        backgroundColor: '#ffffff',
        height: 48,
        width: WIDTH/3,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabText: {
        color: '#373764',
    },
    tabTextActive: {
        fontWeight: 'bold',
        color: '#373764',
    },
    pointer: {
        width: (WIDTH/3) - 28,
        marginHorizontal: 14,
        height: 4,
        backgroundColor: '#1723D3',
        position: 'absolute',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    }
})