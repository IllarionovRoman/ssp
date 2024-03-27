// ContactsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';


const contactsData = [
  { id: 1, name: 'John Doe', photo: { uri: "https://i.ibb.co/6XBZgw6/kachok-s-noutbukom-mem-6.jpg"} },
  { id: 2, name: 'Jane Smith', photo: { uri: "https://i.ibb.co/xDWFbV6/images.jpg" } },
  { id: 3, name: 'Alice Johnson', photo: { uri: "https://i.ibb.co/TP77r73/kachok-s-noutbukom-mem-4.jpg" } },
];

const ContactItem = ({ contact, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(contact)}>
    <Image source={contact.photo} style={styles.photo} />
    <Text style={styles.name}>{contact.name}</Text>
  </TouchableOpacity>
);

const ContactsScreen = ({ navigation }) => {
  const renderContactItem = ({ item }) => (
    <ContactItem contact={item} onPress={contact => navigation.navigate('Detail', { contact })} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsData}
        renderItem={renderContactItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
  },
});

export default ContactsScreen;
