import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function SignCategoryScreen({ navigation }) {
  const { dispatch } = useContext(ServiceApplicationContext);
  const [constructionCompanyName, setConstructionCompanyName] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [businessLicenseNo, setBusinessLicenseNo] = useState("");
  const [representativePhone, setRepresentativePhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    //추후 수정 필요
    const isCompanyNameValid = constructionCompanyName.length > 0;
    const isRepresentativeNameValid = representativeName.length > 0;
    const isBusinessLicenseNoValid = businessLicenseNo.length > 0;
    const isRepresentativePhoneValid = representativePhone.length === 11;

    setIsValid(
      isCompanyNameValid &&
        isRepresentativeNameValid &&
        isBusinessLicenseNoValid &&
        isRepresentativePhoneValid
    );
  };

  const handleCompanyNameChange = (text) => {
    const filteredText = text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, "");
    setConstructionCompanyName(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "construction_company_name",
      value: text,
    });
  };

  const handleRepresentativeNameChange = (text) => {
    const filteredText = text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, "");
    setRepresentativeName(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "representative_name",
      value: filteredText,
    });
  };

  const handleBusinessLicenseNoChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "");
    setBusinessLicenseNo(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "business_license_no",
      value: filteredText,
    });
  };

  const handleRepresentativePhoneChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "");
    setRepresentativePhone(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "representative_phone",
      value: filteredText,
    });
  };

  useEffect(() => {
    validateForm();
  }, [
    constructionCompanyName,
    representativeName,
    businessLicenseNo,
    representativePhone,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setConstructionCompanyName("");
        setRepresentativeName("");
        setBusinessLicenseNo("");
        setRepresentativePhone("");
        setIsValid(false);
      };
    }, [])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.serviceApplicationScreen}>
        <TitleBar>
          <BackButton />
          <Text style={globalStyles.ScreenTitle}>시공업소 정보</Text>
          <CloseButton
            title="서비스 신청"
            destination="UserHome"
            navigation={navigation}
          />
        </TitleBar>

        <KeyboardAwareScrollView>
          <View style={styles.formContainer}>
            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>
                시공(설치)업소명
              </Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="default"
                maxLength={50}
                value={constructionCompanyName}
                onChangeText={handleCompanyNameChange}
              />
            </View>

            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>대표자</Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="default"
                maxLength={50}
                value={representativeName}
                onChangeText={handleRepresentativeNameChange}
              />
            </View>

            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>영업신고번호</Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="numeric"
                maxLength={50}
                value={businessLicenseNo}
                onChangeText={handleBusinessLicenseNoChange}
              />
            </View>

            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>
                대표번호(대표자 휴대폰 번호)
              </Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="numeric"
                maxLength={11}
                value={representativePhone}
                onChangeText={handleRepresentativePhoneChange}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceApplicationAdministrator")}
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
  );
}
