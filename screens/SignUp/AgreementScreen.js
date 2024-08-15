import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TitleBar from "../../components/TitleBar.js";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/SignUpScreenStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function AgreementScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalTitle("");
    setModalContent("");
  };

  return (
    <View style={styles.signUpScreen}>
      <TitleBar>
        <View style={globalStyles.emptyView} />
        <Text style={globalStyles.ScreenTitle}>약관동의</Text>
        <CloseButton
          title="회원가입"
          destination="Home"
          navigation={navigation}
        />
      </TitleBar>

      <Text style={styles.signUpGuide}>약관에{"\n"}동의해주세요.</Text>

      <View style={styles.agreementContainer}>
        <TouchableOpacity
          onPress={() =>
            openModal("서비스 이용 약관", "서비스 이용약관 내용입니다.")
          }
          style={styles.agreementModalButton}
        >
          <View style={styles.agreementRow}>
            <Text style={styles.agreementModalButtonText}>
              [필수] 서비스 이용약관
            </Text>
            <Icon name="chevron-forward" size={22} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openModal(
              "개인정보 수집 및 이용동의",
              "개인정보 수집 및 이용동의 내용입니다."
            )
          }
          style={styles.agreementModalButton}
        >
          <View style={styles.agreementRow}>
            <Text style={styles.agreementModalButtonText}>
              [필수] 개인정보 수집 및 이용동의
            </Text>
            <Icon name="chevron-forward" size={22} color="black" />
          </View>
        </TouchableOpacity>

        <View style={styles.agreementModalButton}>
          <Text style={styles.agreementModalButtonText}>
            [필수] 만 14세 이상입니다
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpPhoneAuth")}
        style={globalStyles.bottomFullWidthButton}
        activeOpacity={0.8}
      >
        <Text style={globalStyles.wideButtonText}>동의하고 회원가입</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <View style={styles.modalContentContainer}>
              <ScrollView>
                <Text style={styles.modalContent}>{modalContent}</Text>
              </ScrollView>
            </View>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
