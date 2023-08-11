import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Image, TouchableOpacity, InputAccessoryView } from 'react-native';
import HyperlinkButton from '../Button/components/HyperlinkButton';
import { getHeight } from '../../utils';
import Card from '../Card/Card';
import TextInput from '../atoms/TextInput';

const closeImg = require('../../assets/bottom-sheet-close.png');

const ModalHelp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <View style={styles.container}>
              <View style={styles.head}>
                <View style={styles.eyelash} />
              </View>
              <View style={styles.titleContent}>
                <Text style={styles.title}>¿Cómo usar un certificado de regalo?</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <View style={styles.buttonClose}>
                    <Image source={closeImg} style={styles.closeImg} />
                    </View>
                </TouchableOpacity>
              </View>
              <View style={styles.content}>
                <View style={styles.textItemContent}>
                    <Text style={styles.textItem}>
                        1. Copia tu certificado de regalo de Spin Premia
                    </Text>
                </View>
                <View style={styles.textItemContent}>
                    <Text style={styles.textItem}>
                        2. Copia tu certificado de regalo de Spin Premia
                    </Text>
                </View>
                <View style={styles.textItemContent}>
                    <Text style={styles.textItem}>
                        3. Copia tu certificado de regalo de Spin Premia
                    </Text>
                </View>
                <View style={styles.textItemContent}>
                    <Text style={styles.textItem}>
                        4. Copia tu certificado de regalo de Spin Premia
                    </Text>
                </View>
                <Card style={styles.card}>
                  <Text style={styles.cardTitle}>Paga con tu crédito electrónico Volaris</Text>
                  <Text style={styles.cardTText}>Paga tu tarifa base con tu crédito electrónico  Volaris. Los impuestos, productos y servicios adicionales deben pagarse con una  tarjeta de crédito o débito adicional.</Text>
                  <View style={styles.form}>
                    <TextInput style={styles.textInput} value={textInputValue} onChangeText={setTextInputValue} />
                    <TouchableOpacity style={styles.btnActivar}>
                        <View style={styles.btnContent}>
                            <Text style={styles.btnText}>Activar</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
                </Card>
              </View>
            </View>
          </View>
      </Modal>
      <HyperlinkButton
      text="¿Cómo usar mi certificado de regalo?"
      onPress={() => setModalVisible(!modalVisible)}
      style={styles.hyperlinkBtn}
      styleText={styles.hyperlinkBtnText} />
    </>
  );
}

export default ModalHelp;

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(5, 5, 61, 0.4)',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        maxHeight: getHeight(597),
        borderTopStartRadius: getHeight(12),
        borderTopEndRadius: getHeight(12),
    },
    closeImg: {
        width: 24,
        height: 24,
    },
    textStyle: {
        color: 'red'
    },
    textItemContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6EC',
        marginBottom: 8,
    },
    textItem: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '400',
    },

    hyperlinkBtn: {
        marginTop: 5,
    },
    hyperlinkBtnText: {
        color: '#1723D3',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },


    head: {
        height: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    eyelash: {
        width: 32,
        height: 4,
        backgroundColor: '#B4B4C5',
    },
    titleContent: {
        minHeight: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6EC'
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 500,
    },
    buttonClose: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },

    card: {
        marginTop: 16,
        padding: 16,
        borderColor: '#E6E6EC',
    },

    cardTitle: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        marginBottom: 16
    },
    cardTText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
    },

    form: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 16
    },
    btnContent: {
        backgroundColor: 'purple',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    btnText: {
        color: 'white',
        fontFamily: 'Poppins',
    },
    textInput: {
        borderColor: '#E6E6EC',
        borderWidth: 2,
        minWidth: '60%',
        borderBottomEndRadius: 0,
        borderTopEndRadius: 0,
        fontFamily: 'Poppins',
    },
    btnActivar: {maxWidth: '30%', backgroundColor: 'yellow', flex: 1, alignItems: 'stretch'}
})
