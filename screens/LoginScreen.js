import React, { useState } from "react";
import axios from "axios";
import { saveToken } from "../utils/secureStore";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import CustomKeyboardAvoidingView from "../components/CustomKeyboardAvoidingView";
import { styles } from "../styles/LoginScreenStyles";
import { globalStyles } from "../styles/GlobalStyles";

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorText, setErrorText] = useState("");

  const handlePhoneNumberChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "");
    setPhoneNumber(filteredText);
  };

  const handlePwdChange = (text) => {
    const filteredText = text.replace(
      /[^a-zA-Z0-9~․!@#$%^&*()_\-+=\[\]\|\\;:'"<>,.?/]/g,
      ""
    );
    setPwd(filteredText);
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    try {
      const response = await axios.post(
        "http://3.39.230.106:8080/member/login",
        {
          phoneNumber,
          password: pwd,
        }
      );

      if (response.data.result) {
        await saveToken("accessToken", response.data.token);
        navigation.navigate("UserHome");
      } else {
        setErrorText(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <CustomKeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.LoginScreen}>
          <View style={styles.LoginFormContainer}>
            <Text style={styles.LoginTitle}>간판지킴이</Text>
            <Text style={globalStyles.formTextInputTitle}>휴대폰 번호</Text>
            <TextInput
              style={[globalStyles.formTextInput, styles.formTextInput]}
              keyboardType="numeric"
              maxLength={11}
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
            <Text style={globalStyles.formTextInputTitle}>비밀번호</Text>
            <TextInput
              style={globalStyles.formTextInput}
              keyboardType="default"
              maxLength={50}
              value={pwd}
              onChangeText={handlePwdChange}
              secureTextEntry={true}
            />
          </View>

          <Text style={styles.errorText}>{errorText}</Text>

          <TouchableOpacity
            style={globalStyles.bottomFullWidthButton}
            activeOpacity={0.8}
            onPress={handleSubmit}
          >
            <Text style={globalStyles.wideButtonText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </CustomKeyboardAvoidingView>
  );
}
