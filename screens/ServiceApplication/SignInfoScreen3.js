import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { GEOCODE_APIKEY } from "@env";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/Ionicons";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar.js";
import BackButton from "../../components/BackButton.js";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

Geocoder.init(GEOCODE_APIKEY, { language: "ko" });

export default function SignInfoScreen3({ navigation }) {
  const { state, dispatch } = useContext(ServiceApplicationContext);
  const [installationAddress, setInstallationAddress] = useState(null);
  const [sitePhotoPath, setSitePhotoPath] = useState(null);
  const [installationHeight, setInstallationHeight] = useState(null);
  const [signWidth, setSignWidth] = useState(null);
  const [signHeight, setSignHeight] = useState(null);
  const [localGovernment, setLocalGovernment] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 37.5665,
    longitude: 126.978,
  });
  const [searchAddress, setSearchAddress] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const handleSearchAddress = async () => {
    if (!searchAddress.trim()) {
      Alert.alert("", "주소를 입력해주세요.");
      return;
    }

    try {
      const geoResult = await Geocoder.from(searchAddress);

      if (geoResult.results.length > 0) {
        const { lat, lng } = geoResult.results[0].geometry.location;
        setSelectedLocation({
          latitude: lat,
          longitude: lng,
        });

        const address = geoResult.results[0].formatted_address.replace(
          "대한민국 ",
          ""
        );
        setInstallationAddress(address);

        Keyboard.dismiss();
      }
    } catch (error) {
      Alert.alert("", "해당 주소를 찾을 수 없습니다.");
    }
  };

  const handleAddressPress = async () => {
    dispatch({
      type: "SET_FIELD",
      field: "installation_address",
      value: installationAddress,
    });

    let localGovernmentResult = "";
    const localGovernmentComponents = installationAddress.split(" ");

    const cityComponent = localGovernmentComponents.find((component) =>
      component.endsWith("시")
    );
    const districtComponent = localGovernmentComponents.find((component) =>
      component.endsWith("구")
    );
    const countyComponent = localGovernmentComponents.find((component) =>
      component.endsWith("군")
    );

    if (countyComponent) {
      localGovernmentResult = `${countyComponent}청`;
    } else if (districtComponent) {
      localGovernmentResult = `${cityComponent} ${districtComponent}청`;
    } else if (cityComponent) {
      localGovernmentResult = `${cityComponent}청`;
    }

    setLocalGovernment(localGovernmentResult);

    dispatch({
      type: "SET_FIELD",
      field: "local_government",
      value: localGovernmentResult,
    });

    setModal(false);
  };

  const handleInstallationHeightChange = (text) => {
    const filteredText = text.replace(/[^0-9.]/g, "");
    setInstallationHeight(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "installation_height",
      value: filteredText,
    });
  };

  const handleSignWidthChange = (text) => {
    const filteredText = text.replace(/[^0-9.]/g, "");
    setSignWidth(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "sign_width",
      value: filteredText,
    });
  };

  const handleSignHeightChange = (text) => {
    const filteredText = text.replace(/[^0-9.]/g, "");
    setSignHeight(filteredText);
    dispatch({
      type: "SET_FIELD",
      field: "sign_height",
      value: filteredText,
    });
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("", "사진 접근 권한이 필요합니다.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setSitePhotoPath(result.assets[0].uri);

      dispatch({
        type: "SET_FIELD",
        field: "site_photo_path",
        value: result.assets[0].uri,
      });
    }
  };

  useEffect(() => {
    if (
      installationAddress &&
      sitePhotoPath &&
      installationHeight &&
      signWidth &&
      signHeight &&
      localGovernment
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    installationAddress,
    sitePhotoPath,
    installationHeight,
    signWidth,
    signHeight,
    localGovernment,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setInstallationAddress(null);
        setSitePhotoPath(null);
        setInstallationHeight(null);
        setSignWidth(null);
        setSignHeight(null);
        setLocalGovernment(null);
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

      <KeyboardAwareScrollView>
        <View style={styles.formContainer}>
          <View style={styles.formTextInputContainer}>
            <Text style={globalStyles.formTextInputTitle}>간판 설치 위치</Text>
            <TextInput
              style={globalStyles.formTextInput}
              value={installationAddress}
              editable={false}
              selectTextOnFocus={false}
            />
            <TouchableOpacity
              style={styles.popUpButton}
              activeOpacity={0.8}
              onPress={() => {
                setModal(true);
                setInstallationAddress(null);
                setSelectedLocation({ latitude: 37.5665, longitude: 126.978 });
                setSearchAddress(null);
              }}
            >
              <Text>주소 찾기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formTextInputContainer}>
            <Text style={globalStyles.formTextInputTitle}>현장(건물)사진</Text>
            <TextInput
              style={globalStyles.formTextInput}
              value={sitePhotoPath}
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
            <Text style={globalStyles.formTextInputTitle}>간판 설치 높이</Text>
            <TextInput
              style={globalStyles.formTextInput}
              keyboardType="numeric"
              value={installationHeight}
              onChangeText={handleInstallationHeightChange}
            />
            <Text style={styles.popUpButton}>m(미터)</Text>
          </View>
          <View style={styles.formTextInputContainer}>
            <Text style={globalStyles.formTextInputTitle}>간판 가로 길이</Text>
            <TextInput
              style={globalStyles.formTextInput}
              keyboardType="numeric"
              value={signWidth}
              onChangeText={handleSignWidthChange}
            />
            <Text style={styles.popUpButton}>m(미터)</Text>
          </View>
          <View style={styles.formTextInputContainer}>
            <Text style={globalStyles.formTextInputTitle}>간판 세로 길이</Text>
            <TextInput
              style={globalStyles.formTextInput}
              keyboardType="numeric"
              value={signHeight}
              onChangeText={handleSignHeightChange}
            />
            <Text style={styles.popUpButton}>m(미터)</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("ServiceApplicationConfirm")}
        style={[
          globalStyles.bottomFullWidthButton,
          !isValid && globalStyles.disabledWideButton,
        ]}
        activeOpacity={0.8}
        disabled={!isValid}
      >
        <Text style={globalStyles.wideButtonText}>다음</Text>
      </TouchableOpacity>

      <Modal visible={modal}>
        <TitleBar>
          <View style={globalStyles.emptyView}></View>
          <Text style={globalStyles.ScreenTitle}>주소 검색</Text>
          <TouchableOpacity
            style={styles.closeButton}
            activeOpacity={0.8}
            onPress={() => {
              setModal(false);
              setSelectedLocation({ latitude: 37.5665, longitude: 126.978 });
              setSearchAddress(null);
            }}
          >
            <Icon name="close" size={40} color="#BBB" />
          </TouchableOpacity>
        </TitleBar>
        <View style={styles.searchAddressTextInput}>
          <TextInput
            style={globalStyles.formTextInput}
            placeholder="주소를 입력하세요"
            value={searchAddress}
            onChangeText={setSearchAddress}
            onSubmitEditing={handleSearchAddress}
          />
        </View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          region={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker coordinate={selectedLocation} />
        </MapView>
        {installationAddress && (
          <View style={styles.searchAddressContainer}>
            <View style={styles.searchAddressTextContainer}>
              <Text style={styles.searchAddressText}>
                {installationAddress}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.searchAddressButton}
              activeOpacity={0.8}
              onPress={handleAddressPress}
            >
              <Text style={styles.searchAddressButtonText}>주소 입력</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
}
