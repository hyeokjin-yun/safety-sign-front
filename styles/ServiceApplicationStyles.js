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
    backgroundColor: "#FFF",
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
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  dateText: {
    fontSize: 14,
  },
  searchAddressTextInput: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
    width: "95%",
    zIndex: 999,
  },
  searchAddressContainer: {
    flex: 1,
    position: "absolute",
    justifyContent: "space-between",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#FFF",
  },
  searchAddressTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  searchAddressText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchAddressButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  searchAddressButtonText: {
    color: "#FFF",
    fontSize: 22,
  },
  confirmButton: {
    alignItems: "center",
    width: "100%",
    height: 50,
    padding: 12,
    fontSize: 14,
    borderRadius: 15,
    backgroundColor: "#4F8EF7",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  imageScreen: {
    flex: 1,
    paddingBottom: 60,
    backgroundColor: "#000",
  },
  modalScreen: {
    padding: 10,
    paddingBottom: 60,
  },
  confirmContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 120,
    marginBottom: 10,
  },
  signPaintingContainer: {
    height: "100%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  confirmContent: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  confirmContentRow: {
    flex: 1,
    flexDirection: "row",
  },
  confirmContextText1Container: {
    flex: 3,
    justifyContent: "center",
    height: "100%",
    borderRightWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#F0F0F0",
  },
  confirmContentText1: {
    textAlign: "center",
  },
  confirmContentText2: {
    flex: 7,
    alignSelf: "center",
    textAlign: "center",
  },
  chooseText: {
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "#F0F0F0",
  },
  confirmLocalGovernmentContentContainer: {
    flex: 1,
    marginTop: 150,
  },
  confirmLocalGovernmentContent1: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  confirmLocalGovernmentContent2: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  confirmLocalGovernmentButtonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 50,
  },
  confirmLocalGovernmentButton: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  confirmLocalGovernmentButtonText: {
    color: "#FFF",
    fontSize: 22,
  },
  itemRow: {
    flex: 1,
    flexDirection: "row",
    minHeight: 25,
    borderBottomWidth: 1,
    borderColor: "#DDD",
  },
  listItem: {
    flex: 3,
    justifyContent: "center",
    height: "100%",
    borderRightWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#F0F0F0",
  },
  listItemText1: {
    textAlign: "center",
  },
  listItemText2: {
    flex: 7,
    alignSelf: "center",
    textAlign: "center",
  },
});
