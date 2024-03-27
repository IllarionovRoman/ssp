import React, { useState } from "react";
import { View, TextInput, Image, Pressable, Text, StyleSheet, Alert} from "react-native";
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => { 
    if (!username || !password) { 
      Alert.alert("Ошибка", "Пожалуйста, заполните все поля", [ 
        { text: "OK", onPress: () => {} }, 
      ]); 
      return; 
    } 
    Alert.alert("Успешно", "Вход выполнен успешно", [ 
      { text: "OK", onPress: () => {} }, 
    ]); 
    navigation.navigate("Welcome", { username }); 
    setUsername(""); 
    setPassword(""); 
  }; 
  
  const navigateToRegister = () => {
    navigation.navigate("Register");
    setUsername("");
    setPassword("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("./img/star.jpg")}
        style={{ width: 150, height: 150, marginBottom: 20, zIndex: -1 }}
      />
      <Text style={styles.head}>Авторизация</Text>
      <TextInput
        placeholder="Имя пользователя"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderWidth: 2, padding: 7, width: 200, borderRadius: 20, borderColor: 'red' }}
      />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ marginBottom: 10, borderWidth: 2, padding: 7, width: 200, borderRadius: 20, borderColor: 'red' }}
      />
      <View style={{ marginBottom: 10 }}>
        <Pressable style={styles.logbutton} onPress={handleLogin}>
          <Text style={styles.textlog}>Войти</Text>
        </Pressable>
      </View>
      <Pressable onPress={navigateToRegister}>
          <Text style={styles.textreg}>Регистрация</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: 'red',
    width: 200,
    borderRadius: 20,
    marginTop: 10,
  },
  textlog: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textreg: {
    color: 'green',
  }, 
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default Login;