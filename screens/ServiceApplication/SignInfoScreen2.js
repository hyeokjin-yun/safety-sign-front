import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function SignInfoScreen2({ navigation }) {
  const { dispatch } = useContext(ServiceApplicationContext);
  const [signImagePath, setSignImagePath] = useState(null);
  const [designImagePath, setDesignImagePath] = useState(null);
  const [ownerConsentImagePath, setOwnerConsentImagePath] = useState(null);
  const [specificationImagePath, setSpecificationImagePath] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const pickImage = async (selectedImage) => {
    const imageMap = {
      signImage: {
        path: "sign_image_path",
        setPath: setSignImagePath,
      },
      designImage: {
        path: "design_image_path",
        setPath: setDesignImagePath,
      },
      ownerConsentImage: {
        path: "owner_consent_image_path",
        setPath: setOwnerConsentImagePath,
      },
      specificationImage: {
        path: "specification_image_path",
        setPath: setSpecificationImagePath,
      },
    };

    const { path: dispatchField, setPath } = imageMap[selectedImage];

    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("사진 접근 권한이 필요합니다.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setPath(imageUri);

      dispatch({
        type: "SET_FIELD",
        field: dispatchField,
        value: imageUri,
      });
    }
  };

  useEffect(() => {
    if (
      signImagePath &&
      designImagePath &&
      ownerConsentImagePath &&
      specificationImagePath
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    signImagePath,
    designImagePath,
    ownerConsentImagePath,
    specificationImagePath,
  ]);

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
            onPress={() => pickImage("signImage")}
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
            onPress={() => pickImage("designImage")}
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
            onPress={() => pickImage("ownerConsentImage")}
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
            onPress={() => pickImage("specificationImage")}
          >
            <Text>파일 첨부</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ServiceApplicationSignInfo3")}
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
