import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import { getToken } from "../../utils/secureStore";
import TitleBar from "../../components/TitleBar.js";
import BackButton from "../../components/BackButton.js";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function PaymentScreen({ navigation }) {
  const { state } = useContext(ServiceApplicationContext);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      if (state.sign_image_path) {
        formData.append("sign_image", {
          uri: state.sign_image_path,
          name: "sign_image.jpg",
          type: "image/jpeg",
        });
      }
      if (state.design_image_path) {
        formData.append("design_image", {
          uri: state.design_image_path,
          name: "design_image.jpg",
          type: "image/jpeg",
        });
      }
      if (state.owner_consent_image_path) {
        formData.append("owner_consent_image", {
          uri: state.owner_consent_image_path,
          name: "owner_consent_image.jpg",
          type: "image/jpeg",
        });
      }
      if (state.specification_image_path) {
        formData.append("specification_image", {
          uri: state.specification_image_path,
          name: "specification_image.jpg",
          type: "image/jpeg",
        });
      }
      if (state.site_photo_path) {
        formData.append("site_photo", {
          uri: state.site_photo_path,
          name: "site_photo.jpg",
          type: "image/jpeg",
        });
      }

      Object.keys(state).forEach((key) => {
        if (!key.includes("_image_path") || !key.includes("_photo_path")) {
          formData.append(key, state[key]);
        }
      });

      const token = await getToken("accessToken");

      const response = await axios.post(
        "http://3.39.230.106:8080/service/serviceApply",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        navigation.navigate("ServiceApplicationPaymentDone");
      } else {
        console.error("Unexpected response:", response);
        alert("예상치 못한 응답이 발생했습니다.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      alert("결제 중 오류가 발생했습니다.");
    }
  };

  return (
    <View style={styles.serviceApplicationScreen}>
      <TitleBar>
        <BackButton />
        <Text style={globalStyles.ScreenTitle}>결제</Text>
        <CloseButton
          title="서비스 신청"
          destination="UserHome"
          navigation={navigation}
        />
      </TitleBar>

      <View style={styles.confirmLocalGovernmentContentContainer}>
        <Text style={styles.confirmLocalGovernmentContent1}>결제금액</Text>
        <Text style={styles.confirmLocalGovernmentContent1}>00,000원</Text>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={globalStyles.bottomFullWidthButton}
        activeOpacity={0.8}
      >
        <Text style={globalStyles.wideButtonText}>결제</Text>
      </TouchableOpacity>
    </View>
  );
}
