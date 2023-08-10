import { StyleSheet } from "react-native";

export const ExchangeStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    }
})

export const SelectAllyStyles = StyleSheet.create({
    title: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#05053D',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    }
})

export const AllyCardStyles = StyleSheet.create(
    {
        cardStyles: {
            marginHorizontal: 20,
            height: 72
        },
        container: {
            flex: 1,
            flexDirection: 'row',
            height: 72,
            alignItems: 'center'
        },
        stringsContainer: {
            flexDirection: 'column'
        },
        image: {
            borderRadius: 32,
            marginHorizontal: 14,
        },
        name: {
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 20,
            color: '#05053D'
        },
        category: {
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 20,
            color: '#69698B'
        },
        frontButtonContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        },
        frontButton: {
            marginRight: 25,
        }
    }
)

