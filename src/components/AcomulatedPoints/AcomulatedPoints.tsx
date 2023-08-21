import React from "react"

import Text from "../../../femsaComponents/components/Text/Text";
import { Image, View } from "react-native";
import { styles } from "../../styles/LoyaltyStyles/AcomulatedPoints.style";
import { useMovementsContext } from "../../context/SuperAppContext";

interface AcomulatedPointsProps {
    showBadge: boolean
}

const AcomulatedPoints: React.FC<AcomulatedPointsProps> = ({ showBadge }) => {

    const { state } = useMovementsContext()

    return (<View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text children={'Tienes'} style={styles.title} />
            <View style={styles.iconContainer}>
                <Text children={state.points + ' puntos'} style={styles.points} />
                {!showBadge && <Image source={require('../../assets/Components/AlertIcon.png')} style={styles.icon}/>}
            </View>
            <View style={styles.blueContainer}>
                <View style={styles.blue}>
                    <Image style={styles.image} source={require('../../assets/Loyalty/acomulatedPointsValue.png')} />
                    <Text children={'Valen $' + state.points / 10} style={styles.pointsValue}></Text>
                </View>
            </View>
        </View>
        {showBadge && <Image source={require('../../assets/Loyalty/badge.png')} />}
    </View>)
}

export default AcomulatedPoints;