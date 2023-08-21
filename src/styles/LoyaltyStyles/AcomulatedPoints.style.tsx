import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 10,
    },
    points: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        marginBottom: 15,
    },
    blue: {
        flexDirection: 'row',
        borderRadius: 16,
        backgroundColor: '#C9E9F3',
        height: 22,
    },
    blueContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    pointsValue: {
        color: '#006686',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 16,
        marginLeft: 10,
        marginTop: 2,
        marginRight: 15,
    },
    image: {
        marginLeft: 10,
        marginTop: 2,
    },
    iconContainer: {
        flexDirection: 'row'
    },
    icon: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 5,
    }
})