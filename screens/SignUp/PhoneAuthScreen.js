import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext";
import CustomKeyboardAvoidingView from "../../components/CustomKeyboardAvoidingView";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton";
import { styles } from "../../styles/SignUpScreenStyles";
import { globalStyles } from "../../styles/GlobalStyles";

export default function PhoneAuthScreen({ navigation }) {
  const { dispatch } = useContext(UserContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handlePhoneNumberChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "");
    setPhoneNumber(filteredText);
    if (filteredText.length === 11) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlePhone = () => {
    dispatch({ type: "SET_FIELD", field: "phoneNumber", value: phoneNumber });
    navigation.navigate("SignUpNameInput");
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setPhoneNumber("");
        setIsValid(false);
      };
    }, [])
  );

  return (
    <CustomKeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.signUpScreen}>
          <TitleBar>
            <BackButton />
            <Text style={globalStyles.ScreenTitle}>회원가입</Text>
            <CloseButton
              title="회원가입"
              destination="Home"
              navigation={navigation}
            />
          </TitleBar>

          <Text style={styles.signUpGuide}>
            휴대폰 번호를{"\n"}입력해주세요.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="휴대폰 번호 입력"
            keyboardType="numeric"
            maxLength={11}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />

          <TouchableOpacity
            onPress={handlePhone}
            style={[
              globalStyles.bottomFullWidthButton,
              !isValid && globalStyles.disabledWideButton,
            ]}
            activeOpacity={0.8}
            disabled={!isValid}
          >
            <Text style={globalStyles.wideButtonText}>인증번호 요청</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </CustomKeyboardAvoidingView>
  );
}
