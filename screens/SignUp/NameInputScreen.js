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
import CustomKeyboardAvoidingView from "../../components/CustomKeyboardAvoidingView.js";
import TitleBar from "../../components/TitleBar.js";
import BackButton from "../../components/BackButton.js";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/SignUpScreenStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function NameInputScreen({ navigation }) {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (text) => {
    const filteredText = text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, "");
    setName(filteredText);

    const hasConsonants = /[ㄱ-ㅎ]/.test(filteredText);

    if (filteredText.length >= 2 && !hasConsonants) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleName = () => {
    dispatch({ type: "SET_FIELD", field: "name", value: name });
    navigation.navigate("SignUpPwdInput");
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setName("");
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

          <Text style={styles.signUpGuide}>이름을{"\n"}입력해주세요.</Text>
          <TextInput
            style={styles.textInput}
            placeholder="이름 입력"
            keyboardType="default"
            maxLength={50}
            value={name}
            onChangeText={handleNameChange}
          ></TextInput>

          <TouchableOpacity
            onPress={handleName}
            style={[
              globalStyles.bottomFullWidthButton,
              !isValid && globalStyles.disabledWideButton,
            ]}
            activeOpacity={0.8}
            disabled={!isValid}
          >
            <Text style={globalStyles.wideButtonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </CustomKeyboardAvoidingView>
  );
}
