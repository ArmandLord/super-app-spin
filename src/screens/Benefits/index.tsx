import { ScrollView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { BenefitsInfo } from './BenefitsInfo';
import { BenefitsCards } from './BenefitsCards';
import { BenefitsSection } from './BenefitsSection';
import { BenefitsBanner } from './BenefitsBanner';
import styles from '../../styles/spinplus/Benefits/Benefits.styles';

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
      <BenefitsBanner />
    </ScrollView>
  );
};