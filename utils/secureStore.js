import * as SecureStore from "expo-secure-store";

export async function saveToken(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error("Error saving token to SecureStore:", error);
  }
}

export async function getToken(key) {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Error retrieving token from SecureStore:", error);
    return null;
  }
}

export async function deleteToken(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error deleting token from SecureStore:", error);
  }
}
