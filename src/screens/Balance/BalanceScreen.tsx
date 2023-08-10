import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import AcomulatedPoints from "../../components/AcomulatedPoints/AcomulatedPoints";
import { styles } from "../../styles/BalanceStyles/BalanceStyles.styles";
import { useMovementsContext } from "../../context/SuperAppContext";
import LessThanOneHundredPoints from "../../components/Balance/LessThanOneHundredPoints";
import OneHundredPoints from "../../components/Balance/OneHundredPoints";
import MoreThanTenHundredPoints from "../../components/Balance/MoreThanTenHundredPoints";

function BalanceScreen() {
    const { state } = useMovementsContext()
    return (
        <ScrollView style={styles.scrollView}>
            <View style={{ paddingHorizontal: 24 }}>
                <AcomulatedPoints showBadge={false} />
            </View>
            {state.points < 1000 ? <LessThanOneHundredPoints /> : state.points < 10000 ? <OneHundredPoints /> : <MoreThanTenHundredPoints />}
        </ScrollView >)
}

export default BalanceScreen;