import React from "react";
import { Image, View } from "react-native";
import Text from "../Text/Text";
import { LoyaltyCardTypes } from "../../types/LoyaltyCardTypes";
import { styles } from "../../styles/LoyaltyCard.style";


const LoyaltyCard: React.FC<LoyaltyCardTypes> = ({ title, subTitle, url }) => {

    return (
        <View >
            <Text children={title} style={styles.title} />
            <Text children={subTitle} />
            <View style={styles.container}>
                <Image source={url} />
            </View>
        </View>)
}

export default LoyaltyCard;