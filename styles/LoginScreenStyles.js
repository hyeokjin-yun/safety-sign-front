import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  LoginFormContainer: {
    width: "100%",
  },
  LoginTitle: {
    textAlign: "center",
    marginBottom: 50,
    fontSize: 52,
    fontWeight: "bold",
  },
  formTextInput: {
    marginBottom: 20,
  },
  errorText: {
    textAlign: "left",
    width: "100%",
    paddingLeft: 8,
    color: "red",
  },
});
