import { AsyncStorage, Alert } from 'react-native';

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      Alert.alert('AsyncStorage error(saveItem): ', err);
    }
  },
  async loadJWT() {
    try {
      return await AsyncStorage.getItem('id_token');
    } catch (err) {
      Alert.alert('AsyncStorage error(loadJWT): ', err);
    }
  },
  async deleteJWT() {
    try {
      await AsyncStorage.removeItem('id_token');
    } catch (err) {
      Alert.alert('AsyncStorage error(deleteJWT): ', err);
    }
  }
};

export default deviceStorage;
