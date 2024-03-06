import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Card>
          <AssetExample
            name="iPhone 15 128GB (розовый)"
            image={require('./assets/iphone1.png')}
            description="iPhone 15 128GB в розовом цвете - это современный смартфон от Apple. Этот гаджет имеет стильный дизайн, мощный процессор Apple A16 Bionic"
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="iPhone 11 128GB белый"
            image={require('./assets/iphone2.png')}
            description="Айфон11 128 GB белый  – это продвинутая модель для современного комфорта, полноценного пользования и стильного образа."
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="iPhone 12 mini, 64 ГБ, Красный"
            image={require('./assets/iphone3.png')}
            description="Айфон 12 Мини 64 Гб красный— малогабаритный девайс, покоривший сердца многих осенью 2020 года. Компактный"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  line: {
    height: 10,
  },
});
