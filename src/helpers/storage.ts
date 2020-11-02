import AsyncStorage from '@react-native-community/async-storage';

export function setStorageItem(key: string, value: any) {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

export function removeStorageItem(key: string) {
  AsyncStorage.removeItem(key);
}

export function getStorageItem(key: string) {
  return AsyncStorage.getItem(key)
    .then(value => {
      if (value) {
        return JSON.parse(value);
      }
      return undefined;
    })
    .catch(() => {
      return undefined;
    });
}