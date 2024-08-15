import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
} from "react-native";
import TitleBar from "../../components/TitleBar";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";

const signInfoData = [
  { key: "1", value: "간판유형(벽면이용간판, 돌출간판, 지주이용간판 중 택1)" },
  { key: "2", value: "간판사진" },
  { key: "3", value: "원색도안" },
  { key: "4", value: "소유자승락서" },
  { key: "5", value: "시방서" },
  { key: "6", value: "표시 기간" },
  { key: "7", value: "공사(설치)기간" },
  { key: "8", value: "간판 설치 주소" },
  { key: "9", value: "현장(건물)사진" },
  { key: "10", value: "간판 설치 높이(m)" },
  { key: "11", value: "간판 가로 길이(m)" },
  { key: "12", value: "간판 세로 길이(m)" },
  { key: "13", value: "지자체(지역, 시군구 중 택 1)" },
];

const administratorData = [
  { key: "1", value: "관리자명" },
  { key: "2", value: "전화번호" },
  { key: "3", value: "주소" },
  { key: "4", value: "기타" },
];

const constructionCompanyData = [
  { key: "1", value: "시공(설치)업소명" },
  { key: "2", value: "대표자명" },
  { key: "3", value: "영업신고번호" },
  { key: "4", value: "대표번호(대표자 휴대폰 번호)" },
];

export default function NoticeScreen({ navigation }) {
  return (
    <View style={styles.serviceApplicationScreen}>
      <TitleBar>
        <View style={globalStyles.emptyView}></View>
        <Text style={globalStyles.ScreenTitle}>서비스 신청</Text>
        <CloseButton
          title="서비스 신청"
          destination="UserHome"
          navigation={navigation}
        />
      </TitleBar>

      <SectionList
        sections={[
          { title: "간판 정보", data: signInfoData },
          { title: "광고물 관리자 정보", data: administratorData },
          { title: "시공 업소 정보", data: constructionCompanyData },
        ]}
        renderItem={({ item }) => (
          <View style={styles.submitInfoContent}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 5 }}>•</Text>
              <Text>{item.value}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.submitInfoTitle}>
            <Text style={styles.submitInfoTitleText}>{section.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => (
          <Text style={styles.submitInfoGuide}>제출 정보 안내</Text>
        )}
      />

      <TouchableOpacity
        style={globalStyles.bottomFullWidthButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("ServiceApplicationSignCategory")}
      >
        <Text style={globalStyles.wideButtonText}>서비스 신청하기</Text>
      </TouchableOpacity>
    </View>
  );
}
