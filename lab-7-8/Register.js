import React, { useState } from "react";
import { View, TextInput, Image, Pressable, Text, StyleSheet, Alert } from "react-native";
import Toast from "react-native-toast-message";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => { 
    if (!username || !password) { 
      Alert.alert("Ошибка", "Пожалуйста, заполните все поля", [ 
        { text: "OK", onPress: () => {} }, 
      ]); 
      return; 
    } 
    Alert.alert("Успешно", "Регистрация выполнена успешно", [ 
      { text: "OK", onPress: () => {} }, 
    ]); 
    navigation.navigate("Welcome", { username }); 
    setUsername(""); 
    setPassword(""); 
  }; 

  const navigateToLogin = () => {
    navigation.navigate("Login");
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("./img/star.jpg")}
        style={{ width: 150, height: 150, marginBottom: 20, zIndex: -1 }}
      />
      <Text style={styles.head}>Регистрация</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderWidth: 2, padding: 7, width: 200, borderRadius: 20, borderColor: 'green' }}
      />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ marginBottom: 10, borderWidth: 2, padding: 7, width: 200, borderRadius: 20, borderColor: 'green' }}
      />
      <TextInput
        placeholder="Имя пользователя"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderWidth: 2, padding: 7, width: 200, borderRadius: 20, borderColor: 'green' }}
      />
      <View style={{ marginBottom: 10 }}>
      <Pressable style={styles.regbutton} onPress={handleRegister}>
        <Text style={styles.textreg}>Зарегистрироваться</Text>
      </Pressable>
      </View>
      <Pressable onPress={navigateToLogin}>
        <Text style={styles.textlog}>Вход</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  regbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: 'green',
    width: 200,
    borderRadius: 20,
    marginTop: 10,
  },
  textreg: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textlog: {
    color: 'red',
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default Register;