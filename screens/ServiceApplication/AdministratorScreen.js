import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/Ionicons";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";
import Postcode from "@actbase/react-daum-postcode";

export default function SignCategoryScreen({ navigation }) {
  const { dispatch } = useContext(ServiceApplicationContext);
  const [administratorName, setAdministratorName] = useState("");
  const [administratorPhone, setAdministratorPhone] = useState("");
  const [administratorAddress1, setAdministratorAddress1] = useState("");
  const [administratorAddress2, setAdministratorAddress2] = useState("");
  const [addtionalInfo, setAddtionalInfo] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isModal, setModal] = useState(false);

  const validateForm = () => {
    //추후 수정 필요
    const isAdministratorNameValid = administratorName.length > 0;
    const isAdministratorPhoneValid = administratorPhone.length > 9;
    const isAdministratorAddress1Valid = administratorAddress1.length > 0;
    const isAdministratorAddress2Valid = administratorAddress2.length > 0;

    setIsValid(
      isAdministratorNameValid &&
        isAdministratorPhoneValid &&
        isAdministratorAddress1Valid &&
        isAdministratorAddress2Valid
    );
  };

  const handleAdministratorNameChange = (text) => {
    const filteredText = text.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]/g, "");
    setAdministratorName(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "administrator_name",
      value: filteredText,
    });
  };

  const handleAdministratorPhoneChange = (text) => {
    const filteredText = text.replace(/[^0-9]/g, "");
    setAdministratorPhone(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "administrator_phone",
      value: filteredText,
    });
  };

  const handleAdministratorAddress2Change = (text) => {
    const filteredText = text.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/g, "");
    setAdministratorAddress2(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "administrator_address",
      value: administratorAddress1 + " " + filteredText,
    });
  };

  const handleAddtionalInfoChange = (text) => {
    setAddtionalInfo(text);
    dispatch({
      type: "SET_FIELD",
      field: "additional_info",
      value: text,
    });
  };

  useEffect(() => {
    validateForm();
  }, [
    administratorName,
    administratorPhone,
    administratorAddress1,
    administratorAddress2,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setAdministratorName("");
        setAdministratorPhone("");
        setAdministratorAddress1("");
        setAdministratorAddress2("");
        setAddtionalInfo("");
        setIsValid(false);
      };
    }, [])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.serviceApplicationScreen}>
        <TitleBar>
          <BackButton />
          <Text style={globalStyles.ScreenTitle}>광고물 관리자 정보</Text>
          <CloseButton
            title="서비스 신청"
            destination="UserHome"
            navigation={navigation}
          />
        </TitleBar>

        <KeyboardAwareScrollView>
          <View style={styles.formContainer}>
            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>관리자명</Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="default"
                maxLength={50}
                value={administratorName}
                onChangeText={handleAdministratorNameChange}
              />
            </View>

            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>전화번호</Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="numeric"
                maxLength={11}
                value={administratorPhone}
                onChangeText={handleAdministratorPhoneChange}
              />
            </View>

            <View style={[styles.formTextInputContainer, { marginBottom: 5 }]}>
              <Text style={globalStyles.formTextInputTitle}>주소</Text>
              <TextInput
                style={globalStyles.formTextInput}
                value={administratorAddress1}
                editable={false}
                selectTextOnFocus={false}
              />
              <TouchableOpacity
                style={styles.popUpButton}
                activeOpacity={0.8}
                onPress={() => setModal(true)}
              >
                <Text>주소 찾기</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>상세주소</Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="default"
                maxLength={100}
                value={administratorAddress2}
                onChangeText={handleAdministratorAddress2Change}
              />
            </View>

            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>기타</Text>
              <TextInput
                style={globalStyles.formTextInput}
                keyboardType="default"
                maxLength={100}
                value={addtionalInfo}
                onChangeText={handleAddtionalInfoChange}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceApplicationSignInfo1")}
          style={[
            globalStyles.bottomFullWidthButton,
            !isValid && globalStyles.disabledWideButton,
          ]}
          activeOpacity={0.8}
          disabled={!isValid}
        >
          <Text style={globalStyles.wideButtonText}>다음</Text>
        </TouchableOpacity>

        <Modal visible={isModal}>
          <TitleBar>
            <View style={globalStyles.emptyView}></View>
            <Text style={globalStyles.ScreenTitle}>주소 검색</Text>
            <TouchableOpacity
              style={styles.closeButton}
              activeOpacity={0.8}
              onPress={() => setModal(false)}
            >
              <Icon name="close" size={40} color="#BBB" />
            </TouchableOpacity>
          </TitleBar>
          <Postcode
            style={{ width: "100%", height: "100%" }}
            jsOptions={{ animation: true, hideMapBtn: true }}
            onSelected={(data) => {
              setAdministratorAddress1(data.address);
              dispatch({
                type: "SET_FIELD",
                field: "administrator_address",
                value: data.address,
              });
              setModal(false);
            }}
          />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
