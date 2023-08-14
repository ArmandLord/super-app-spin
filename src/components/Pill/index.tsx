import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type TPill = {
    children: ReactNode;
    styleContent?: object;
}

const Pill = ({children, styleContent}: TPill) => {
  return (
    <View style={[styles.pillContent, styleContent]}>
      {children}
    </View>
  );
};

export default Pill;

const styles = StyleSheet.create({
  pillContent: {
    marginTop: 8,
    backgroundColor: '#F5F5F7',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    alignSelf: 'center',
    borderRadius: 16,
  },
});