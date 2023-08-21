import React, { useState } from "react"
import { Image, View } from "react-native"
import { OneHundredPointsStyle, TopBorderCard } from "../../styles/BalanceStyles/BalanceStyles.styles"
import Text from "../../../femsaComponents/components/Text/Text"
import AcomulatedPointsInput from "../AcomulatedPoints/AcomulatedPointsInput"
import { useMovementsContext } from "../../context/SuperAppContext"
import Button from "../../../femsaComponents/components/Button/Button"
import AcomulatedPointsButtons from "../AcomulatedPoints/AcomulatedPointsButtons"

const OneHundredPoints = () => {

    const [value, setValue] = useState('');
    const { state, dispatch } = useMovementsContext()
    const [buttonSelected, setButtonSelected] = useState(50);

    return <View style={[TopBorderCard.container]}>
        <View style={OneHundredPointsStyle.container} >
            <AcomulatedPointsButtons showMoreButton={false} buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} />
            <AcomulatedPointsInput value={value} setValue={setValue} text="Otro:" subText="El valor mínimo que puedes cambiar es $20.00"
                error={parseInt(value) > state.points / 10 ? 'EL valor es mayor a los puntos' : ''} />
            <View style={OneHundredPointsStyle.buttonContainer}>
                <Button
                    disabled={parseInt(value) < 20 || (buttonSelected === 0 && value === '') || parseInt(value) > state.points / 10}
                    text={"Continuar"} style={OneHundredPointsStyle.button} onPress={function (): void {
                        dispatch({ type: 'SET_POINTS_TO_EXCHANGE', payload: value !== '' ? parseInt(value) : buttonSelected })
                    }} />
            </View>
        </View>
    </View>
}

export default OneHundredPoints;