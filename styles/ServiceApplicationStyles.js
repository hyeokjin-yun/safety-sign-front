import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  serviceApplicationScreen: {
    flex: 1,
    paddingBottom: 60,
  },
  submitInfoGuide: {
    textAlign: "center",
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  submitInfoTitle: {
    justifyContent: "center",
    height: 50,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#F0F0F0",
  },
  submitInfoTitleText: {
    fontSize: 16,
  },
  submitInfoContent: {
    paddingVertical: 3,
    paddingHorizontal: 30,
    borderColor: "#DDD",
  },
  signCategoryButtonContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  signCategoryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    width: "100%",
    height: "30%",
  },
  signCategoryButtonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  selectedButton: {
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  formContainer: {
    padding: 30,
  },
  formTextInputContainer: {
    marginBottom: 40,
  },
  popUpButton: {
    position: "absolute",
    top: "50%",
    right: 2,
    paddingHorizontal: 10,
    backgroundColor: "#FFF"
  },
  closeButton: {
    width: 40,
    height: 40,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateButtonContainer: {
    justifyContent: "center",
    width: "45%",
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  dateText: {
    fontSize: 14,
  },
});
