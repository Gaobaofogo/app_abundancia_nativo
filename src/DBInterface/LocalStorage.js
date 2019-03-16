import { AsyncStorage } from 'react-native';

class LocalStorage {
  static async saveUserName(name) {
    try {
      await AsyncStorage.setItem('userName', name);
    } catch (err) {
      throw err;
    }
  }

  static async getUserName() {
    try {
      const userName = await AsyncStorage.getItem('userName');

      return userName;
    } catch (err) {
      throw err;
    }
  }
}

export default LocalStorage;
