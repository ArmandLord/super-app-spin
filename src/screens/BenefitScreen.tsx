import React from 'react';
import { View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Text from '../components/Text/Text';
import ContentStackedCard from '../components/Card/components/ContentStackedCard';
import Banner from '../components/molecules/Banner';
import historytask from '../assets/svg/history-task.png';
import spinpremia from '../assets/svg/premia.png';
import prop from '../assets/svg/prop.png';
import medal from '../assets/svg/medal.png';
import star from '../assets/svg/star.png';
import premiastar from '../assets/svg/premia-star.png';
import iconPoints from '../assets/svg/icon.png';
import { useNavigation } from '@react-navigation/native';

const BenefitScreen = () => {
  
  const {navigate} = useNavigation();

  const points = "10,657";
  const pointsValue = "156.00";
  const imageWidth = 100;
  const imageHeight = 100;

  const banners = [
    {
      id: 1,
      banner: {
        image: require('../assets/svg/banner1.png'),
      },
    },
    {
      id: 2,
      banner: {
        image: require('../assets/svg/banner1.png'),
      },
    },
    {
      id: 3,
      banner: {
        image: require('../assets/svg/banner1.png'),
      },
    },
    {
      id: 4,
      banner: {
        image: require('../assets/svg/banner1.png'),
      },
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.subTitle}>Beneficios</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.subTitle}>Tienes</Text>
          <View style={styles.pointsContainer}>
            <View style={styles.pointsValueBox}>
              <Text style={styles.points}>{points} puntos</Text>
              <View style={styles.pointsBox}>
                <Image
                  source={iconPoints}
                  style={[styles.pointsImage, {width: 18, height: 18}]}
                />
                <Text style={styles.pointsValue}>Valen ${pointsValue}</Text>
              </View>
            </View>
            <Image
              source={spinpremia}
              style={[styles.pointsIcon, {width: 100, height: 100}]}
            />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <ContentStackedCard
            title="Consulta tu historial"
            titleSize="default"
            onPress={() => navigate('TransactionsScreen')}
            icon={
              <Image
                source={historytask}
                style={[
                  styles.cardIcon,
                  {width: imageWidth, height: imageHeight},
                ]}
              />
            }
          />
          <ContentStackedCard
            title="Cambia tus puntos"
            titleSize="default"
            onPress={() => console.log('Card pressed')}
            icon={
              <Image
                source={premiastar}
                style={[
                  styles.cardIcon,
                  {width: imageWidth, height: imageHeight},
                ]}
              />
            }
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Acumula productos</Text>
          <View style={styles.propContainer}>
            <Text style={styles.propDescription}>
              Muy pronto podrás sumar tus compras y ganar productos de regalo
            </Text>
            <Image source={prop} style={styles.propImage} />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Gana más puntos</Text>
          <View style={styles.propContainer}>
            <Text style={styles.propDescription}>
              Muy pronto podrás ganar más puntos en el total de tu compra
            </Text>
            <Image source={star} style={styles.propImage} />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Suma al comprar</Text>
          <View style={styles.propContainer}>
            <Text style={styles.propDescription}>
              Muy pronto podrás acumular compras y llevarte productos de regalo
            </Text>
            <Image source={medal} style={styles.propImage} />
          </View>
        </View>
        <View style={styles.divider} />
        <Banner
          banners={banners}
          onPress={banner => console.log('Banner pressed:', banner.id)}
          bannerWidth={380}
          bannerTranslation={100}
          imageStyles={{height: 120}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  cardIcon: {
    alignSelf: 'center',
    marginTop: 30,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0', 
    marginVertical: 20,
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pointsIcon: {
    alignSelf: 'center',
  },
  pointsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C9E9F3',
    width: 150,
    height: 24,
    padding: 4,
    borderRadius: 12,
    gap: 8,
  },
  pointsValueBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexGrow: 1,
  },
  pointsImage: {
    alignSelf: 'center',
    marginRight: 8,
  },
  pointsValue: {
    color: '#006686',
    fontWeight: 'bold',
    fontSize: 14,
  },
  propContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  propDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
  },
  propImage: {
    width: 200,
    height: 200,
  },
});

export default BenefitScreen;
