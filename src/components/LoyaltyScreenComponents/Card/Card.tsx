import React from "react";
import { View } from "react-native";
import useThemedStyles from "../../../../femsaComponents/hooks/useThemedStyles";
import { BaseCardProps, ContentStackedProps } from "../../../../femsaComponents/components/Card/types";
import BaseCard from "../../../../femsaComponents/components/Card/components/BaseCard";
import Text from "../../../../femsaComponents/components/Text/Text";
import { styles } from "../../../styles/LoyaltyStyles/Card.styles";

interface TextContentProps {
    title?: string;
    titleSize?: 'small' | 'default' | 'extra-small';
}

interface ImageContentProps {
    image?: JSX.Element;
}


const ImageContent = ({ image }: ImageContentProps) => {
    const themedStyle = useThemedStyles(styles);
    return <View style={themedStyle.imageContent}>{image}</View>;
};

const TextContent = ({ title, titleSize = 'default' }: TextContentProps) => {
    const themedStyle = useThemedStyles(styles);
    const cardTextNumberOfLines = 2;
    const getTextVariant = (size: 'small' | 'default' | 'extra-small') => {
        switch (size) {
            case 'small':
                return 'small-body-bold';
            case 'extra-small':
                return 'extra-small-body-bold';
            default:
                return 'default-body-bold';
        }
    };

    return (
        <Text
            variant={getTextVariant(titleSize)}
            style={themedStyle.textContent}
            numberOfLines={cardTextNumberOfLines}
        >
            {title}
        </Text>
    );
};


function Card(props: ContentStackedProps & BaseCardProps) {
    const themedStyle = useThemedStyles(styles);
    const isValidTitlesSize =
        props.titleSize === 'small' ||
        props.titleSize === 'default' ||
        props.titleSize === 'extra-small';

    if (!isValidTitlesSize) {
        throw new Error(
            "Invalid value of titlesSize. Please only use 'small',  'default', 'extra-small' ",
        );
    }

    return (
        <BaseCard
            {...props}
            style={themedStyle.card}
            elevationIOS={themedStyle.elevation}
            onPress={props.onPress}
        >
            <View>
                <ImageContent image={props.icon} />
                <TextContent
                    title={props.title}
                    titleSize={props.titleSize ?? 'default'}
                />
            </View>
        </BaseCard>
    );
}

export default Card;