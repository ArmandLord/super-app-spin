import React, { useState } from "react";
import { Image, View } from 'react-native';
import { LessThanOneHundredPointsStyle, TopBorderCard } from "../../styles/BalanceStyles/BalanceStyles.styles";
import Text from "../../../femsaComponents/components/Text/Text";
import TextInput from "../../../femsaComponents/components/atoms/TextInput";
import { useMovementsContext } from "../../context/SuperAppContext";
import Button from "../../../femsaComponents/components/Button/Button";
import AcomulatedPointsInput from "../AcomulatedPoints/AcomulatedPointsInput";

const LessThanOneHundredPoints = () => {

    const [value, setValue] = useState('');
    const { state, dispatch } = useMovementsContext()

    return (
        <View style={[TopBorderCard.container]}>
            <View style={LessThanOneHundredPointsStyle.container} >
                <AcomulatedPointsInput value={value} setValue={setValue} subText="El valor mínimo que puedes cambiar es $20.00"
                    error={parseInt(value) > state.points / 10 ? 'EL valor es mayor a los puntos' : ''}
                    text="Escribe el valor de los puntos que quieres cambiar" />
                {state.points < 200 &&
                    <View style={LessThanOneHundredPointsStyle.warningCard}>
                        <Image source={require('../../assets/Components/warningIcon.png')} style={LessThanOneHundredPointsStyle.warningIcon} />
                        <Text children={'Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste'} style={LessThanOneHundredPointsStyle.warningText} />
                    </View>
                }
                <View style={LessThanOneHundredPointsStyle.buttonContainer}>
                    <Button
                        disabled={state.points < 200 || parseInt(value) < 20 || value === ''}
                        text={"Continuar"} style={LessThanOneHundredPointsStyle.button} onPress={function (): void {
                            dispatch({ type: 'SET_POINTS_TO_EXCHANGE', payload: parseInt(value) })
                        }} />
                </View>
            </View>
        </View>)
}

export default LessThanOneHundredPoints;