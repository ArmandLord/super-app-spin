// TODO: Consum the correct data once api service ticket is merged
import { View } from 'react-native';
import { MovementList } from './MovementsList';
import styles from '../../styles/spinplus/Movements/Movements.styles';
import useHistory from '../../hooks/useHistory';

const filterData = (data: HistoryItem[], operation: string) =>
  data.filter(item => item.operation === operation);

export const MovementsAll = () => {
  const { history } = useHistory();
  return (
    <View style={styles.tabContainer}>
      <MovementList data={history} isLoading={false} />
    </View>
  );
};

export const MovementsGained = () => {
  const data = filterData([], 'earned');

  return (
    <View style={styles.tabContainer}>
      <MovementList data={data} isLoading={false} />
    </View>
  );
};

export const MovementsUsed = () => {
  const data = filterData([], 'used');

  return (
    <View style={styles.tabContainer}>
      <MovementList data={data} isLoading={false} />
    </View>
  );
};