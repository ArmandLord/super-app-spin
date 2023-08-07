import React from "react";
import { Image, View } from "react-native";
import Text from "../Text/Text";
import { LoyaltyCardTypes } from "../../types/LoyaltyCardTypes";


const LoyaltyCard: React.FC<LoyaltyCardTypes> = ({ title, subTitle, url }) => {
    const imageURL = require(url)
    return (
    <View>
        <Text children={title} />
        <Text children={subTitle} />
        <Image source={imageURL} />
    </View>)
}

export default LoyaltyCard;