import React from "react";
import { View } from "react-native";
import { useMovementsContext } from "../../context/SuperAppContext";
import TextInput from "../../../femsaComponents/components/atoms/TextInput";
import { AcomulatedPointsInputStyle } from "../../styles/BalanceStyles/BalanceStyles.styles";
import Text from "../../../femsaComponents/components/Text/Text";

interface AcomulatedPointsInputProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    text: string,
    error: string,
    subText: string
}

const AcomulatedPointsInput: React.FC<AcomulatedPointsInputProps> = ({ value, setValue, text, error, subText }) => {

    const { state } = useMovementsContext()

    return (
        <View>
            <Text children={text} style={AcomulatedPointsInputStyle.text} />
            <TextInput error={error}
                editable={state.points >= 200} variant="numeric"
                label={"Monto en pesos"} value={value}
                onChangeText={(text: string) => { setValue(text) }} style={AcomulatedPointsInputStyle.input} />
            {error === '' && <Text children={subText}
                style={[AcomulatedPointsInputStyle.subText, state.points >= 200 ? { color: '#69698B' } : { color: 'gray' }]} />}
        </View>)
}
export default AcomulatedPointsInput;