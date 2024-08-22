import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
} from "react-native";
import TitleBar from "../../components/TitleBar.js";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import { styles } from "../../styles/ServiceApplicationStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function ApplicationDoneScreen({ navigation }) {
  const { state } = useContext(ServiceApplicationContext);

  const signInfoData = [
    {
      key: "1",
      value1: "간판유형",
      value2:
        state.sign_category_id === 1
          ? "벽면이용간판"
          : state.sign_category_id === 2
          ? "돌출간판"
          : "지주이용간판",
    },
    {
      key: "2",
      value1: "공사(설치)기간",
      value2:
        state.construction_period_start + " ~ " + state.construction_period_end,
    },
    {
      key: "3",
      value1: "표시 기간",
      value2: state.display_period_start + " ~ " + state.display_period_end,
    },
    { key: "4", value1: "간판 설치 주소", value2: state.installation_address },
    {
      key: "5",
      value1: "간판 설치 높이(m)",
      value2: state.installation_height,
    },
    { key: "6", value1: "간판 가로 길이(m)", value2: state.sign_width },
    { key: "7", value1: "간판 세로 길이(m)", value2: state.sign_height },
    { key: "8", value1: "지자체", value2: state.local_government },
  ];

  const administratorData = [
    { key: "1", value1: "관리자명", value2: state.administrator_name },
    { key: "2", value1: "전화번호", value2: state.administrator_phone },
    { key: "3", value1: "주소", value2: state.administrator_address },
    { key: "4", value1: "기타", value2: state.additional_info },
  ];

  const constructionCompanyData = [
    {
      key: "1",
      value1: "시공(설치)업소명",
      value2: state.construction_company_name,
    },
    { key: "2", value1: "대표자명", value2: state.representative_name },
    { key: "3", value1: "영업신고번호", value2: state.business_license_no },
    {
      key: "4",
      value1: "대표번호(대표자 휴대폰 번호)",
      value2: state.representative_phone,
    },
  ];

  return (
    <View style={styles.serviceApplicationScreen}>
      <TitleBar>
        <View style={globalStyles.emptyView}></View>
        <Text style={globalStyles.ScreenTitle}>신청 내역 확인</Text>
        <View style={globalStyles.emptyView}></View>
      </TitleBar>

      <SectionList
        sections={[
          { title: "간판 정보", data: signInfoData },
          { title: "광고물 관리자 정보", data: administratorData },
          { title: "시공 업소 정보", data: constructionCompanyData },
        ]}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText1}>{item.value1}</Text>
            </View>
            <Text style={styles.listItemText2}>{item.value2}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.submitInfoTitle}>
            <Text style={styles.submitInfoTitleText}>{section.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />

      <TouchableOpacity
        style={globalStyles.bottomFullWidthButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("UserHome")}
      >
        <Text style={globalStyles.wideButtonText}>홈 화면으로</Text>
      </TouchableOpacity>
    </View>
  );
}
