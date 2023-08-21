import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { style } from './movementsDetail.Style';
import useTheme from '../../../../femsaComponents/hooks/useTheme';
import Text from '../../../../femsaComponents/components/Text/Text';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/OnboardingNavigation';
import Card from '../../../../femsaComponents/components/Card/Card';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Detalles'>;
  route: RouteProp<RootStackParamList, 'Detalles'>;
};

const MovementsDetailsScreen: React.FC<Props> = ({ route }) => {
  const { movement } = route.params;
  const { colors } = useTheme();

  const getEntityImageSource = () => {
    switch (movement.entity) {
      case 'Oxxo Gas':
        return require('../../../assets/movimientos/oxxo-gas.png');
      case 'Volaris':
        return require('../../../assets/movimientos/volaris.png');
      case 'Oxxo':
        return require('../../../assets/movimientos/oxxo.png');
      default:
        return require('../../../assets/movimientos/spin.png');
    }
  };

  const renderEntityDetails = () => (
    <Card style={{ height: 180, width: '100%' }} contentStyle={{ alignItems: 'center' }}>
      <Card style={style.imageContainer} contentStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={style.logo} source={getEntityImageSource()} />
      </Card>
      <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flex: 1, width: '100%' }}>
        <Text variant="headline-medium">{movement.entity}</Text>
        <View style={[style.gainsLabel, { backgroundColor: colors.surface_secondary }]}>
          <Text variant="default-body">En esta compra {movement.operation === 'earned' ? 'ganaste' : 'usaste'}:</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text variant="headline-large" style={{ color: colors.ui_active }}>{movement.operation === 'earned' ? '+ ' : '- '}</Text>
          <Text variant="headline-extra-large">{movement.points}</Text>
        </View>
      </View>
    </Card>
  );

  const renderTransactionInfo = (label: string, value: string) => (
    <View style={style.infoContainer}>
      <Text variant="label-default">{label}</Text>
      <Text variant="label-default-bold">{value}</Text>
    </View>
  );

  return (
    <ScrollView
      style={[style.container, { backgroundColor: colors.surface_primary }]}
      contentContainerStyle={{ paddingTop: 50, paddingBottom: 16 }}
    >
      <View style={{ padding: 16 }}>
        {renderEntityDetails()}
      </View>
      <View style={[style.infoConainer, { borderBottomColor: colors.stroke_secondary }]}>
        {renderTransactionInfo('Monto total:', `$${(movement.points / 10).toFixed(2)}`)}
        {renderTransactionInfo('Fecha:', movement.date)}
        {renderTransactionInfo('Úsalos desde el:', movement.date)}
      </View>
      <View style={{ paddingVertical: 16, gap: 8, padding: 16 }}>
        <Text variant="label-default">Número de transacción</Text>
        <Text variant="label-default-bold" style={{ color: colors.content_tertiary }}>
          ${movement.transactionNo}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovementsDetailsScreen;
