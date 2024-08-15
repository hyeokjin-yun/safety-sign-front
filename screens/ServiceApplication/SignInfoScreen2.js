import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function SignInfoScreen2({ navigation }) {
  const { state, dispatch } = useContext(ServiceApplicationContext);
  const [signImagePath, setSignImagePath] = useState(null);
  const [designImagePath, setDesignImagePath] = useState(null);
  const [ownerConsentImagePath, setOwnerConsentImagePath] = useState(null);
  const [specificationImagePath, setSpecificationImagePath] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const pickImage = async (setImagePath) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("사진 접근 권한이 필요합니다.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagePath(result.assets[0].uri);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSignImagePath(null);
        setDesignImagePath(null);
        setOwnerConsentImagePath(null);
        setSpecificationImagePath(null);
        setIsValid(false);
      };
    }, [])
  );

  return (
      <View style={styles.serviceApplicationScreen}>
        <TitleBar>
          <BackButton />
          <Text style={globalStyles.ScreenTitle}>간판 정보</Text>
          <CloseButton
            title="서비스 신청"
            destination="UserHome"
            navigation={navigation}
          />
        </TitleBar>

        <View style={styles.formContainer}>
            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>간판사진</Text>
              <TextInput
                style={globalStyles.formTextInput}
                value={signImagePath}
                editable={false}
                selectTextOnFocus={false}
              />
              <TouchableOpacity
                style={styles.popUpButton}
                activeOpacity={0.8}
                onPress={() => pickImage(setSignImagePath)}
              >
                <Text>파일 첨부</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>원색도안</Text>
              <TextInput
                style={globalStyles.formTextInput}
                value={designImagePath}
                editable={false}
                selectTextOnFocus={false}
              />
              <TouchableOpacity
                style={styles.popUpButton}
                activeOpacity={0.8}
                onPress={() => pickImage(setDesignImagePath)}
              >
                <Text>파일 첨부</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>소유자 승락서</Text>
              <TextInput
                style={globalStyles.formTextInput}
                value={ownerConsentImagePath}
                editable={false}
                selectTextOnFocus={false}
              />
              <TouchableOpacity
                style={styles.popUpButton}
                activeOpacity={0.8}
                onPress={() => pickImage(setOwnerConsentImagePath)}
              >
                <Text>파일 첨부</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formTextInputContainer}>
              <Text style={globalStyles.formTextInputTitle}>시방서</Text>
              <TextInput
                style={globalStyles.formTextInput}
                value={specificationImagePath}
                editable={false}
                selectTextOnFocus={false}
              />
              <TouchableOpacity
                style={styles.popUpButton}
                activeOpacity={0.8}
                onPress={() => pickImage(setSpecificationImagePath)}
              >
                <Text>파일 첨부</Text>
              </TouchableOpacity>
            </View>

        </View>

        <TouchableOpacity
          onPress={() => console.log(state)}
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
  );
}
