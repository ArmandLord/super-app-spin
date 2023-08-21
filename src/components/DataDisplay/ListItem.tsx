import React from 'react'
import { View, Image, Pressable } from 'react-native';

import { style } from './listitem.style';

import Text from '../../../femsaComponents/components/Text/Text';
import useTheme from '../../../femsaComponents/hooks/useTheme';
import { ListItemProps } from '../../types/ListItemTypes';

const ListItem = ({ itemName, supportText, infoLabel, onPress = () => { console.log('') }, icon }: ListItemProps) => {

    const { colors } = useTheme()
    return (
        <Pressable
            onPress={onPress}
            style={[style.container, { borderBottomColor: colors.stroke_secondary }]}>
            <Image
                resizeMode='contain'
                style={style.icon}
                source={icon}
            />
            <View style={style.coreContent}>
                <Text variant='default-body-bold'>{itemName}</Text>
                <Text variant='small-body'>{supportText}</Text>
            </View>
            <Text variant='label-small-bold'>{infoLabel}</Text>

        </Pressable>
    );
}

export default ListItem;