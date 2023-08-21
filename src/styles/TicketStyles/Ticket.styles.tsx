import { StyleSheet } from "react-native";

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
    },
    text1: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 16,
        marginTop: 10,
        marginBottom: 5,
    },
    text2: {
        color: '#69698B',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 16,
        marginBottom: 10
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
        marginTop: 80
    },
    entityInfoContainer: {
        height: 300,
        width: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 24,
        marginVertical: 15
    },
    imageContainer: {
        height: 72,
        width: 72,
        borderRadius: 100,
        marginTop: -43
    },
    logo: {
        height: 66,
        width: 66,
        borderRadius: 100
    },
    gainsLabel: {
        height: 40,
        width: '85%',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoConainer: {
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        gap: 8,
        paddingBottom: 16
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    }
})

export const TicketInfoStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    howToUse: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 16,
        color: '#1723D3',
        marginBottom: 30
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    leftText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 16,
        color: '#373764'
    },
    rigthText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 16,
        color: '#373764'
    }
})