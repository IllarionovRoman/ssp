import React from "react";
import { View, Text, Image, Button, Pressable, StyleSheet } from "react-native";
// через route получаем доступ к параметрам маршрута
const Welcome = ({ route,navigation }) => {
  const { username } = route.params;
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ paddingLeft: "80%", paddingTop: "2%", paddingBottom: "20%" }} />
      <Image
        source={require("./img/welcome.jpg")}
        style={{ width: 400, height: 200, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Добро пожаловать, {username}!
      </Text>
      <Pressable style={styles.exitbutton} onPress={navigateToLogin}>
          <Text style={styles.exittext}>Выход</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  exitbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: 'black',
    width: 200,
    borderRadius: 20,
    marginTop: 10,
  },
  exittext:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default Welcome;