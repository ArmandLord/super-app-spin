import React, { ReactNode } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Card from '../Card';

type TCard = {
    title: string;
    image: number,
    children: ReactNode,
    styleContent?: object;
};

const TransactionCard = ({title, image, children, styleContent}: TCard) => {
    return (
        <Card style={[styles.card, styleContent]}>
            <View style={styles.partnerContent}>
                <Image source={image} style={styles.thumbnail} />
            </View>
            <Text style={styles.entity}>{title}</Text>
            {children}
        </Card>
    )
};

export default TransactionCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        minHeight: 180,
        marginTop: 78 / 2 + 16,
        paddingBottom: 10,
        paddingHorizontal: 8,
    },
    partnerContent: {
        width: 78,
        height: 78,
        alignSelf: 'center',
        borderRadius: 78 / 2,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
        borderWidth: 3,
        borderColor: 'white',
        marginTop: -78 / 2
    },
    thumbnail: {
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
    },
    entity: {
        marginTop: 8,
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '500',
        alignSelf: 'center',
        marginBottom: 8,
    },
});
