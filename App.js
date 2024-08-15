import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { UserProvider } from "./context/UserContext";
import { ServiceApplicationProvider } from "./context/ServiceApplicationContext";

export default function App() {
  return (
    <UserProvider>
      <ServiceApplicationProvider>
        <SafeAreaProvider>
          <SafeAreaView style={styles.safeArea}>
            <NavigationContainer theme={navTheme}>
              <StatusBar barStyle="auto" />
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </ServiceApplicationProvider>
    </UserProvider>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
