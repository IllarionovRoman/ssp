import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const contactsData = [
  { id: '1', firstName: 'Иван', lastName: 'Иванов', number: '+3754567890' },
  { id: '2', firstName: 'Петр', lastName: 'Петров', number: '+3757654321' },
  { id: '3', firstName: 'Алексей', lastName: 'Алексеев', number: '+3756543210' },
  { id: '4', firstName: 'Юрий', lastName: 'Желтов', number: '+375566456' },
  { id: '5', firstName: 'Антон', lastName: 'Терпилов', number: '+37549944' },
  { id: '6', firstName: 'Андрей', lastName: 'Малюков', number: '+3756543210' },
];

const contactsData2 = [
  { id: '1', firstName: 'Роман', lastName: 'Букин', number: '+3754567890' },
  { id: '2', firstName: 'Евгений', lastName: 'Измайлов', number: '+3757654321' },
  { id: '3', firstName: 'Никита', lastName: 'Шелби', number: '+3756543210' },
  { id: '4', firstName: 'Доминик', lastName: 'Хмельницкий', number: '+375566456' },
  { id: '5', firstName: 'Кирилл', lastName: 'Илларионов', number: '+37549944' },
  { id: '6', firstName: 'Александр', lastName: 'Окунев', number: '+3756543210' },
];

const contactsData3 = [
  { id: '1', firstName: 'Екатерина', lastName: 'Иванова', number: '+3754567890' },
  { id: '2', firstName: 'София', lastName: 'Петрова', number: '+3757654321' },
  { id: '3', firstName: 'Алексей', lastName: 'Алексеев', number: '+3756543210' },
  { id: '4', firstName: 'Алина', lastName: 'Желтова', number: '+375566456' },
  { id: '5', firstName: 'Антон', lastName: 'Терпилов', number: '+37549944' },
  { id: '6', firstName: 'Андрей', lastName: 'Малюков', number: '+3756543210' },
];

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это первая страница контактов</Text>
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contactText}>{`${item.firstName} ${item.lastName} - ${item.number}`}</Text>
        )}
      />
      <Button
        title="Далее"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это вторая страница контактов</Text>
      <FlatList
        data={contactsData2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contactText}>{`${item.firstName} ${item.lastName} - ${item.number}`}</Text>
        )}
      />
      <Button
        title="Далее"
        onPress={() => navigation.navigate('Third')}
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это третья страница контактов</Text>
      <FlatList
        data={contactsData3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contactText}>{`${item.firstName} ${item.lastName} - ${item.number}`}</Text>
        )}
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 8,
  },
});