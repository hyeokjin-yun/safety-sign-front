import React, { useState, useEffect, useContext } from "react";
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
import axios from "axios";
import CustomKeyboardAvoidingView from "../../components/CustomKeyboardAvoidingView";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton";
import { styles } from "../../styles/SignUpScreenStyles";
import { globalStyles } from "../../styles/GlobalStyles";

export default function PwdInputScreen({ navigation }) {
  const { state, dispatch } = useContext(UserContext);
  const [pwd, setPwd] = useState("");
  const [pwdRepeat, setPwdRepeat] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const [showPatternError, setShowPatternError] = useState(false);
  const [showMismatchError, setShowMismatchError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const isSimplePassword = (password) => {
    const sequentialPattern =
      /(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;
    if (sequentialPattern.test(password)) return true;

    const repeatedPattern = /(.)\1{2,}/;
    if (repeatedPattern.test(password)) return true;

    return false;
  };

  const validatePasswords = (password, passwordRepeat) => {
    const lengthError = password.length < 10;
    const patternError = isSimplePassword(password);

    setShowLengthError(lengthError);
    setShowPatternError(!lengthError && patternError);

    const isValidPwd = !lengthError && !patternError;
    const passwordsMatch = password === passwordRepeat;

    setIsValid(isValidPwd && passwordsMatch);
    setShowMismatchError(passwordRepeat.length > 0 && !passwordsMatch);
  };

  const handlePwdChange = (text) => {
    const filteredText = text.replace(
      /[^a-zA-Z0-9~․!@#$%^&*()_\-+=\[\]\|\\;:'"<>,.?/]/g,
      ""
    );
    setPwd(filteredText);
    validatePasswords(filteredText, pwdRepeat);
  };

  const handlePwdRepeatChange = (text) => {
    const filteredText = text.replace(
      /[^a-zA-Z0-9~․!@#$%^&*()_\-+=\[\]\|\\;:'"<>,.?/]/g,
      ""
    );
    setPwdRepeat(filteredText);
    validatePasswords(pwd, filteredText);
  };

  const handleSubmit = async () => {
    dispatch({ type: "SET_FIELD", field: "password", value: pwd });
    setSubmit(true); // 제출 상태 업데이트
  };

  useEffect(() => {
    const submitData = async () => {
      if (submit) {
        try {
          const response = await axios.post(
            "http://222.114.27.89:8080/member/signUp",
            { ...state, password: pwd }
          );
          console.log("Server response:", response.data);
          navigation.navigate("SignUpDone");
        } catch (error) {
          if (error.response) {
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
          } else if (error.request) {
            console.error("Error request:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
          console.error("Error config:", error.config);
        } finally {
          setSubmit(false);
        }
      }
    };

    submitData();
  }, [state.password, submit]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setPwd("");
        setPwdRepeat("");
        setIsValid(false);
        setShowLengthError(false);
        setShowPatternError(false);
        setShowMismatchError(false);
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

          <Text style={styles.signUpGuide}>비밀번호를{"\n"}입력해주세요.</Text>
          <TextInput
            style={styles.textInput}
            placeholder="비밀번호 입력"
            keyboardType="default"
            maxLength={50}
            value={pwd}
            onChangeText={handlePwdChange}
            secureTextEntry={true}
          />

          <View style={styles.errorTextContainer}>
            {showLengthError && (
              <Text style={styles.errorText}>10자 이상 입력해주세요</Text>
            )}
            {showPatternError && (
              <Text style={styles.errorText}>
                단순한 조합은 이용할 수 없어요(123, aaa 등)
              </Text>
            )}
          </View>

          <TextInput
            style={[styles.textInput, { marginTop: 15 }]}
            placeholder="비밀번호 확인"
            keyboardType="default"
            maxLength={50}
            value={pwdRepeat}
            onChangeText={handlePwdRepeatChange}
            secureTextEntry={true}
          />

          <View style={styles.errorTextContainer}>
            {showMismatchError && (
              <Text style={styles.errorText}>비밀번호가 일치하지 않아요</Text>
            )}
          </View>

          <TouchableOpacity
            style={[
              globalStyles.bottomFullWidthButton,
              !isValid && globalStyles.disabledWideButton,
            ]}
            activeOpacity={0.8}
            disabled={!isValid}
            onPress={handleSubmit}
          >
            <Text style={globalStyles.wideButtonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </CustomKeyboardAvoidingView>
  );
}
