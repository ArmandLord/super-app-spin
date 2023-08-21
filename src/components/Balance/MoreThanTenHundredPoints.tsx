import React, { useState } from "react";
import { View } from 'react-native';
import { useMovementsContext } from "../../context/SuperAppContext";
import { OneHundredPointsStyle, TopBorderCard } from "../../styles/BalanceStyles/BalanceStyles.styles";
import AcomulatedPointsButtons from "../AcomulatedPoints/AcomulatedPointsButtons";
import AcomulatedPointsInput from "../AcomulatedPoints/AcomulatedPointsInput";
import Button from "../../../femsaComponents/components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const MoreThanTenHundredPoints = () => {
    const [value, setValue] = useState('');
    const { dispatch } = useMovementsContext()
    const [buttonSelected, setButtonSelected] = useState(50);
    const navigation = useNavigation()
    return <View style={[TopBorderCard.container]}>
        <View style={OneHundredPointsStyle.container} >
            <AcomulatedPointsButtons showMoreButton={true} buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} />
            <AcomulatedPointsInput value={value} setValue={setValue} text="Otro:" subText="'El valor máximo que puedes cambiar es $1,000.00'"
                error={parseInt(value) > 1000 ? 'El valor máximo que puedes cambiar es $1,000.00' : ''} />
            <View style={OneHundredPointsStyle.buttonContainer}>
                <Button
                    disabled={parseInt(value) < 20 || (buttonSelected === 0 && value === '') || parseInt(value) > 1000}
                    text={"Continuar"} style={OneHundredPointsStyle.button} onPress={function (): void {
                        dispatch({ type: 'SET_POINTS_TO_EXCHANGE', payload: value !== '' ? parseInt(value) : buttonSelected })
                        navigation.navigate('ticketScreen')
                    }} />
            </View>
        </View>
    </View>
}

export default MoreThanTenHundredPoints;