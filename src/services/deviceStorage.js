import { AsyncStorage } from 'react-native';

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log('AsyncStorage error: ', err);
    }
  }
};

export default deviceStorage;
