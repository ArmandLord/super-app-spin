import React from "react";
import { Image, View } from "react-native";

import { LoyaltyCardTypes } from "../../../types/LoyaltyCardTypes";

import Text from "../../../../femsaComponents/components/Text/Text";
import { styles } from "../../../styles/LoyaltyStyles/LoyaltyCard.style";


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