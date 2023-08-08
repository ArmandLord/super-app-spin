import { ScrollView } from 'react-native';
import { BenefitsInfo } from './BenefitsInfo';
import { BenefitsCards } from './BenefitsCards';
import { BenefitsSection } from './BenefitsSection';
import styles from '../../styles/spinplus/Benefits/Benefits.styles';
import useTheme from '../../hooks/useTheme';

export const Benefits = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
      ]}
      contentContainerStyle={styles.contentContainer}>
      <BenefitsInfo />
      <BenefitsCards />
      <BenefitsSection
        title="Acumula produtos"
        img={require('../../assets/acumulaProductos.png')}
        text="Muy pronto podrás sumar tus compras y ganar productos de regalo"
      />
      <BenefitsSection
        title="Gana más puntos"
        img={require('../../assets/ganaPuntos.png')}
        text="Muy pronto podrás ganar más puntos en el total de tu compra"
      />
      <BenefitsSection
        title="Suma al comprar"
        img={require('../../assets/sumaAlComprar.png')}
        text="Muy pronto podrás acumular compras y llevarte productos de regalo"
      />
    </ScrollView>
  );
};
