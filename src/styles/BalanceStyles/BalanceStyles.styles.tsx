import { Dimensions, StyleSheet } from "react-native";
import AcomulatedPointsInput from "../../components/AcomulatedPoints/AcomulatedPointsInput";

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        height: '100%',
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    containerStyle: {
        height: 250,
    },
})

export const TopBorderCard = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#E6E6EC',
        borderColor: 'transparent',
        borderWidth: 1,
    }
})

export const AcomulatedPointsInputStyle = StyleSheet.create({
    input: {
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 15
    },
    subText: {
        marginTop: 15,
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400',
        marginLeft: 10
    },
})

export const LessThanOneHundredPointsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 15
    },
    warningCard: {
        backgroundColor: '#FFDFBC',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 84,
        marginTop: 20
    },
    warningIcon: {
        marginRight: 18
    },
    warningText: {
        color: '#05053D',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        width: '80%'
    },
    buttonContainer: {
        flex: 1,
        marginTop: Dimensions.get('screen').height / 3
    },
    button: {
        backgroundColor: '#1723D3',
    }
})

export const OneHundredPointsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flex: 1,
        marginTop: Dimensions.get('screen').height / 10
    },
    button: {
        backgroundColor: '#1723D3',
    }
})

export const AcomulatedPointsButtonsStyle = StyleSheet.create({
    container: {
        marginBottom: 50
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        marginBottom: 15,
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
    },
    bottomText: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        color: '#69698B',
        alignSelf: 'center',
        marginTop: 2
    },
    buttonLeft: {
        flex: 1,
        borderRadius: 14,
        marginRight: 10,
        height: 40,
        width: Dimensions.get('screen').width / 2.5
    },
    buttonRigth: {
        flex: 1,
        borderRadius: 14,
        marginLeft: 10,
        height: 40,
        width: Dimensions.get('screen').width / 2.5
    },
    buttonSelected: {
        backgroundColor: '#E0E0FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSelected: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 16,
        color: '#1723D3',
    },
    textGray: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 16,
        color: '#373764'
    },
    buttonGray: {
        backgroundColor: '#F5F5F7',
        justifyContent: 'center',
        alignItems: 'center'

    }
})
