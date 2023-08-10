import React from 'react'
import { Image, Pressable, View } from 'react-native';
import { style } from './accountScreen.style';
import useTheme from '../../../femsaComponents/hooks/useTheme';
import Text from '../../../femsaComponents/components/Text/Text';
import PointsTag from '../../../femsaComponents/components/atoms/Tag/PointsTag';
import TwoButtonModal from '../../../femsaComponents/components/atoms/Modal/TwoButtonModal';
import useModal from '../../hooks/useModal';
import DeviceInfo from 'react-native-device-info';


const Account = () => {

    const { colors } = useTheme()
    const {showModal, toggleModal} = useModal()

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
                    <Pressable 
                    onPress={toggleModal}
                    style={style.closeSesionButton}>
                        <View style={{ paddingHorizontal: 8 }}>
                            <Image
                                style={style.logoutIcon}
                                source={require('../../assets/account/logout.png')}
                            />
                        </View>
                        <Text variant='default-body' >Cierra sesión</Text>
                    </Pressable>
                </View>
            </View>
            <Text variant='label-small' style={[style.versionText, { color: colors.inverse_content_secondary, }]}>Versión {DeviceInfo.getVersion()}</Text>
            <TwoButtonModal
            visible={showModal}
            onCallbackClose={() => toggleModal()}
            title='¿Quieres cerrar tu sesión?'
            subtitle='Recuerda que puedes volver a entrar a la app cuando quieras'
            showCloseBtn
            firstButtonProps={{
                text:'Sí, cerrar sesión',
                onPress: () => toggleModal()
            }}
            secondButtonProps={{
                text:'En otro momento',
                onPress: () => toggleModal()
            }}
            />
        </View>
    );
}

export default Account;