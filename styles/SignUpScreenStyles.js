import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signUpScreen: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  agreementContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    paddingBottom: 50,
  },
  agreementModalButton: {
    alignSelf: "left",
    width: "100%",
    marginBottom: 30,
  },
  agreementRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreementModalButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpGuide: {
    alignSelf: "left",
    width: "100%",
    marginTop: 60,
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    height: 50,
    padding: 12,
    borderBottomWidth: 2,
    borderColor: "black",
    backgroundColor: "#fff",
    fontSize: 18,
  },
  errorTextContainer: {
    width: "100%",
    textAlign: "left",
    marginBottom: 15,
  },
  errorText: {
    position: "absolute",
    fontSize: 14,
    top: 3,
    left: 5,
    color: "red",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  modalTitle: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContentContainer: {
    flex: 1,
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  modalContent: {
    textAlign: "left",
    fontSize: 16,
  },
  closeButton: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
  },
  closeButtonText: {
    fontSize: 20,
    color: "black",
  },
  signUpDoneGuide: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
