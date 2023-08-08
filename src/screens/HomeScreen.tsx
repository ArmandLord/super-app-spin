import { View } from 'react-native';
import Text from '../components/Text/Text';
import React from 'react';
import ContentStackedCard from '../components/Card/components/ContentStackedCard';
import Svg, { Image as SvgImage } from 'react-native-svg';

const HomeScreen = () => {
  const points = "10,657 ";
  const pointsValue = "156.00";
  return (
    <View>
      <Text>Beneficios</Text>
      <ContentStackedCard
        title="Consulta tu historial"
        titleSize="small"
        icon={
          <Svg width={50} height={50}>
            <SvgImage
              width="100%"
              height="100%"
              href={require('../assets/svg/history-task.svg')}
            />
          </Svg>
        }
      />
      <ContentStackedCard
        title="Cambia tus puntos"
        titleSize="small"
        icon={
          <Svg width={50} height={50}>
            <SvgImage
              width="100%"
              height="100%"
              href={require('../assets/svg/medal.svg')}
            />
          </Svg>
        }
      />
      <Text>Tienes</Text>
      <Text>{points} puntos</Text>
      <Text>Valen ${pointsValue}</Text>
      <Text>Acumula productos</Text>
      <Text>
        Muy pronto podrás sumar tus compras y ganar productos de regalo
      </Text>
      <Text>Gana más puntos</Text>
      <Text>Muy pronto podrás ganar más puntos en el total de tu compra</Text>
      <Text>Suma al comprar</Text>
      <Text>
        Muy pronto podrás acumular compras y llevarte productos de regalo
      </Text>
    </View>
  );
};

export default HomeScreen;
