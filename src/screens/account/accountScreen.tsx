import React from 'react'
import { Image, Pressable, View } from 'react-native';
import { style } from './accountScreen.style';
import useTheme from '../../../femsaComponents/hooks/useTheme';
import Text from '../../../femsaComponents/components/Text/Text';
import PointsTag from '../../../femsaComponents/components/atoms/Tag/PointsTag';
import DeviceInfo from 'react-native-device-info';
import { useMovementsContext } from '../../context/SuperAppContext';
import Modal from '../../../femsaComponents/components/atoms/Modal';
import ElementListItem from '../../customComponents/ElementListItem';

const Account = () => {
    const { dispatch } = useMovementsContext();

    const handleLogOff = () => {
        Modal.hide();
        dispatch({
            type: 'SET_USER_LOGED', payload: false
        });
    };


    const { colors } = useTheme()
    return (
        <View style={[style.container, { backgroundColor: colors.surface_primary }]}>
            <View style={style.contentConainter}>
                <View style={style.infoContainer}>
                    <View style={{ gap: 10 }}>
                        <Text variant='headline-large' >Maria Florencia</Text>
                        <PointsTag
                            leftIcon={require('../../assets/account/starburst.png')}
                            text="1,200 puntos"
                        />
                    </View>
                    <Image
                        style={style.globeIcon}
                        source={require('../../assets/account/globe_icon_new.png')}
                    />
                </View>
                <View style={[style.actionContainer, { borderBottomColor: colors.stroke_secondary }]}>
                    <Text variant='headline-small'>Otras acciones</Text>
                    <ElementListItem
                        title="Cierra sesión"
                        leftIcon={require('../../assets/account/logout.png')}
                        onPress={() => {
                            Modal.show({
                                title: '¿Quieres cerrar tu sesión?',
                                variant: 'two-button',
                                description: 'Recuerda que puedes volver a entrar a la app cuando quieras',
                                firstButtonProps: {
                                    text: 'Sí, cerrar sesión',
                                    onPress: () => handleLogOff(),
                                    enableCloseOnPress: true,
                                },
                                secondButtonProps: {
                                    text: 'En otro momento',
                                    onPress: () => Modal.hide(),
                                },
                            });
                        }}
                    />
                </View>
            </View>
            <Text variant='label-small' style={[style.versionText, { color: colors.inverse_content_secondary, }]}>Versión {DeviceInfo.getVersion()}</Text>

            <Modal.Component />
        </View>
    );
}
export default Account;