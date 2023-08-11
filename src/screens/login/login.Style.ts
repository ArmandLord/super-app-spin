import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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