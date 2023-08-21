import { Dimensions, StyleSheet } from "react-native";
import { ThemeContextType } from "../../../femsaComponents/theme/types";


const { width } = Dimensions.get('window');

export const styles = (theme: ThemeContextType) =>
    StyleSheet.create({
        card: {
            height: 230,

            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            flexDirection: 'column',
            paddingVertical: 25,
            shadowColor: `${theme.colors.content_primary}80`,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
        },
        imageContent: {
            height: 120,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        elevation: { width: 0, height: 3 },
        textContent: {
            marginTop: 16,
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 20
        },
    });