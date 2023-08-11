import { Dimensions, StyleSheet } from "react-native";

export const TicketStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    safe: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20
    },
    content: {
        flex: 1,
        zIndex: 1,
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        color: '#fff'
    }
})
export const TicketBackgroundStyle = StyleSheet.create({
    backGround: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    topHalf: {
        flex: 1,
        backgroundColor: '#087D6F'
    },
    bottomHalf: {
        flex: 2,
        backgroundColor: '#fff'
    },
})
export const TicketCardStyle = StyleSheet.create({
    container: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContainer: {
        height: 108,
        alignItems: 'center',
        width: '100%'
    },
    tab: {
        width: '100%',
        height: 72,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
    },
    image: {
        width: 72,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#fff',
        zIndex: 1,
    },


    card: {
        width: 300,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        overflow: 'hidden',
        borderWidth: 1
    },
    cardImageContainer: {
        height: 150,
        overflow: 'hidden'
    },
    cardContent: {
        width: '100%',
        height: '100%'
    },
})