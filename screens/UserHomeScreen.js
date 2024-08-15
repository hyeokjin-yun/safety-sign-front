import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TitleBar from "../components/TitleBar";
import MypageButton from "../components/MypageButton";
import { styles } from "../styles/UserHomeScreenStyles";

export default function UserHomeScreen({ navigation }) {
  return (
    <View style={styles.userHomeScreen}>
      <TitleBar>
        <Text style={styles.headerTitleText}>Safety Sign</Text>
        <MypageButton />
      </TitleBar>

      <View style={styles.bannerContainer}>
        <Text>배너컨테이너</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.serviceApplyButton}
          onPress={() => navigation.navigate("ServiceApplicationNotice")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>서비스 신청</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ApplicationListButton}
          onPress={() => alert("신청 내역 확인 개발 중")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>서비스 신청 내역 확인</Text>
        </TouchableOpacity>

        <View style={styles.buttonFlexContainer}>
          <TouchableOpacity
            style={styles.announcementsButton}
            onPress={() => alert("공지사항 개발 중")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>공지사항</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.customerSupportButton}
            onPress={() => alert("고객센터 개발 중")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>고객센터</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
