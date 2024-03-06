import { Text, View, StyleSheet, Image, Button, Alert} from 'react-native';

const AssetExample = (props) => {

const ButtonAlert = () =>
    Alert.alert('Оповещение', 'Товар добавлен в корзину', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {props.name}
      </Text>
      <Image style={styles.logo} source={props.image} />
      <Text style={styles.description}>
        {props.description}
      </Text>
      <Button style={styles.but} title="В корзину" onPress={ButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 24,
  },
  description: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
  },
  but: {
    width: '300%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});

export default AssetExample
