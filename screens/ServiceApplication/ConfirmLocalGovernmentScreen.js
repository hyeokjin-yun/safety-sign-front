import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar.js";
import BackButton from "../../components/BackButton.js";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function ConfirmLocalGovernmentScreen({ navigation }) {
  const { state } = useContext(ServiceApplicationContext);

  return (
    <View style={styles.serviceApplicationScreen}>
      <TitleBar>
        <BackButton />
        <Text style={globalStyles.ScreenTitle}>입력 정보 확인</Text>
        <CloseButton
          title="서비스 신청"
          destination="UserHome"
          navigation={navigation}
        />
      </TitleBar>

      <View style={styles.confirmLocalGovernmentContentContainer}>
        <Text style={styles.confirmLocalGovernmentContent1}>
          옥외광고물(
          {state.sign_category_id === 1
            ? "벽면이용간판"
            : state.sign_category_id === 2
            ? "돌출간판"
            : "지주이용간판"}
          )을{"\n"}
          {state.local_government}에{"\n"}
          허가 신청합니다.
        </Text>
        <Text style={styles.confirmLocalGovernmentContent2}>맞습니까?</Text>
      </View>

      <View style={styles.confirmLocalGovernmentButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceApplicationPayment")}
          style={styles.confirmLocalGovernmentButton}
          activeOpacity={0.8}
        >
          <Text style={{ color: "#FFF", fontSize: 22 }}>네</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("개발중")}
          style={styles.confirmLocalGovernmentButton}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmLocalGovernmentButtonText}>아니오</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
