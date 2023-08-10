import React, { useState } from "react"
import { View } from "react-native"
import { AcomulatedPointsButtonsStyle } from "../../styles/BalanceStyles/BalanceStyles.styles"
import Text from "../../../femsaComponents/components/Text/Text"
import { TouchableOpacity } from "react-native-gesture-handler"

interface AcomulatedPointsButtonsProps {
    showMoreButton: boolean,
    buttonSelected: number,
    setButtonSelected: React.Dispatch<React.SetStateAction<number>>
}

const AcomulatedPointsButtons: React.FC<AcomulatedPointsButtonsProps> = ({ showMoreButton, buttonSelected, setButtonSelected }) => {



    return (
        <View style={AcomulatedPointsButtonsStyle.container}>
            <Text children={'Elige o escribe el valor de los puntos que quieres cambiar'}
                style={AcomulatedPointsButtonsStyle.text} />
            <View style={AcomulatedPointsButtonsStyle.buttonContainer}>
                <View>
                    <TouchableOpacity onPress={() => setButtonSelected(buttonSelected == 50 ? 0 : 50)}
                        style={[buttonSelected === 50 ? AcomulatedPointsButtonsStyle.buttonSelected : AcomulatedPointsButtonsStyle.buttonGray, AcomulatedPointsButtonsStyle.buttonLeft]}>
                        <Text children={'$50'}
                            style={[buttonSelected === 50 ? AcomulatedPointsButtonsStyle.textSelected : AcomulatedPointsButtonsStyle.textGray]} />
                    </TouchableOpacity>
                    <Text children={'500 puntos'} style={AcomulatedPointsButtonsStyle.bottomText} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => setButtonSelected(buttonSelected == 100 ? 0 : 100)}
                        style={[buttonSelected === 100 ? AcomulatedPointsButtonsStyle.buttonSelected : AcomulatedPointsButtonsStyle.buttonGray, AcomulatedPointsButtonsStyle.buttonRigth]}>
                        <Text children={'$100'}
                            style={[buttonSelected === 100 ? AcomulatedPointsButtonsStyle.textSelected : AcomulatedPointsButtonsStyle.textGray]} />
                    </TouchableOpacity>
                    <Text children={'1000 puntos'} style={AcomulatedPointsButtonsStyle.bottomText} />
                </View>
            </View>
            {showMoreButton &&
                <View style={AcomulatedPointsButtonsStyle.buttonContainer}>
                    <View>
                        <TouchableOpacity onPress={() => setButtonSelected(buttonSelected == 200 ? 0 : 200)}
                            style={[buttonSelected === 200 ? AcomulatedPointsButtonsStyle.buttonSelected : AcomulatedPointsButtonsStyle.buttonGray, AcomulatedPointsButtonsStyle.buttonLeft]}>
                            <Text children={'$200'}
                                style={[buttonSelected === 200 ? AcomulatedPointsButtonsStyle.textSelected : AcomulatedPointsButtonsStyle.textGray]} />
                        </TouchableOpacity>
                        <Text children={'2,000 puntos'} style={AcomulatedPointsButtonsStyle.bottomText} />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => setButtonSelected(buttonSelected == 500 ? 0 : 500)}
                            style={[buttonSelected === 500 ? AcomulatedPointsButtonsStyle.buttonSelected : AcomulatedPointsButtonsStyle.buttonGray, AcomulatedPointsButtonsStyle.buttonRigth]}>
                            <Text children={'$500'}
                                style={[buttonSelected === 500 ? AcomulatedPointsButtonsStyle.textSelected : AcomulatedPointsButtonsStyle.textGray]} />
                        </TouchableOpacity>
                        <Text children={'5,000 puntos'} style={AcomulatedPointsButtonsStyle.bottomText} />
                    </View>
                </View>
            }
        </View>
    )
}

export default AcomulatedPointsButtons