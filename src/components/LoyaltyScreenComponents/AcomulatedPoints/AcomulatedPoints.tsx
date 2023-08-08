import React from "react"

import Text from "../../../../femsaComponents/components/Text/Text";
import { Image, View } from "react-native";
import { styles } from "../../../styles/LoyaltyStyles/AcomulatedPoints.style";

interface AcomulatedPointsProps {
    points: string,
    money: string,
}


const AcomulatedPoints: React.FC<AcomulatedPointsProps> = ({ points, money }) => {


    return (<View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text children={'Tienes'} style={styles.title}></Text>
            <Text children={points + ' puntos'} style={styles.points}></Text>
            <View style={styles.blueContainer}>
                <View style={styles.blue}>
                    <Image style={styles.image} source={require('../../../assets/Loyalty/acomulatedPointsValue.png')} />
                    <Text children={'Valen $' + money} style={styles.pointsValue}></Text>
                </View>
            </View>
        </View>
        <Image source={require('../../../assets/Loyalty/badge.png')} />
    </View>)
}

export default AcomulatedPoints;