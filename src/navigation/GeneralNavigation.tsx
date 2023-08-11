import React from "react";
import { useMovementsContext } from "../context/SuperAppContext";
import { View } from "react-native";
import MenuNavigation from "./MenuNavigation";
import OnboardingNavigation from "./OnboardingNavigation";

const GeneralNavigation = () => {
    const { state } = useMovementsContext()
    return (
        <View style={{flex:1}}>{state.isLoged ? <MenuNavigation /> : <OnboardingNavigation />}</View>)
}
export default GeneralNavigation;