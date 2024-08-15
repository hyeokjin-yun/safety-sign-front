import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  ScreenTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyView: {
    width: 40,
    height: 40,
  },
  form: {
    width: "100%",
  },
  formFieldContainer: {
    marginBottom: 25,
  },
  formTextInputTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formRequired: {
    color: "red",
  },
  formErrorText: {
    position: "absolute",
    left: 3,
    bottom: -17,
    color: "red",
    fontSize: 13,
    marginTop: 5,
  },
  formTextInput: {
    width: "100%",
    height: 50,
    padding: 12,
    borderWidth: 1,
    fontSize: 14,
    color: "black",
    borderColor: "black",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  wideButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderRadius: 4,
    backgroundColor: "black",
  },
  wideButtonText: {
    fontSize: 22,
    color: "white",
  },
  disabledWideButton: {
    backgroundColor: "#CCC",
  },
  bottomFullWidthButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    width: screenWidth,
    height: 60,
    backgroundColor: "black",
  },
});
