import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar";
import BackButton from "../../components/BackButton";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function ConfirmScreen({ navigation }) {
  const { state } = useContext(ServiceApplicationContext);
  const [modal, setModal] = useState(false);
  const [confirmTitle, setConfirmTitle] = useState(null);
  const [confirmContent, setConfirmContent] = useState(null);

  const handleConfirmModal = (confirmTitle, confirmContent) => {
    setConfirmTitle(confirmTitle);

    const signCategory = {
      1: require("../../assets/wallSign1.png"),
      2: require("../../assets/wallSign2.png"),
      3: require("../../assets/wallSign3.png"),
    };

    const selectedImage = signCategory[state.sign_category_id];

    if (confirmContent === "signImage") {
      setConfirmContent(
        <View style={styles.imageScreen}>
          <Image
            source={{ uri: state.sign_image_path }}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      );
    } else if (confirmContent === "designImage") {
      setConfirmContent(
        <View style={styles.imageScreen}>
          <Image
            source={{ uri: state.design_image_path }}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      );
    } else if (confirmContent === "ownerConsentImage") {
      setConfirmContent(
        <View style={styles.imageScreen}>
          <Image
            source={{ uri: state.owner_consent_image_path }}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      );
    } else if (confirmContent === "specificationImage") {
      setConfirmContent(
        <View style={styles.imageScreen}>
          <Image
            source={{ uri: state.specification_image_path }}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      );
    } else if (confirmContent === "materialPlan") {
      setConfirmContent(
        <KeyboardAwareScrollView>
          <View style={styles.modalScreen}>
            <View style={styles.confirmContentContainer}>
              <View style={styles.signPaintingContainer}>
                <Image
                  source={selectedImage}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmContentRow}>
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>간판 유형</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>
                    {state.sign_category_id === 1
                      ? "벽면이용간판"
                      : state.sign_category_id === 2
                      ? "돌출간판"
                      : "지주이용간판"}
                  </Text>
                </View>
                <View
                  style={[
                    styles.confirmContentRow,
                    {
                      borderTopWidth: 1,
                      borderBottomWidth: 1,
                      borderColor: "#DDD",
                    },
                  ]}
                >
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>가로 길이</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>
                    {state.sign_width} m(미터)
                  </Text>
                </View>
                <View style={styles.confirmContentRow}>
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>세로 길이</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>
                    {state.sign_height} m(미터)
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.confirmContentContainer}>
              <View style={styles.signPaintingContainer}>
                <Image
                  source={require(`../../assets/bracket.png`)}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmContentRow}>
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>품명</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>까치발</Text>
                </View>
                <View
                  style={[
                    styles.confirmContentRow,
                    {
                      borderTopWidth: 1,
                      borderColor: "#DDD",
                    },
                  ]}
                >
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>수량</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>00개 이상</Text>
                </View>
              </View>
            </View>

            <View style={styles.confirmContentContainer}>
              <View style={styles.signPaintingContainer}>
                <Image
                  source={require(`../../assets/directConnectionScrew.png`)}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmContentRow}>
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>품명</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>직결나사</Text>
                </View>
                <View
                  style={[
                    styles.confirmContentRow,
                    {
                      borderTopWidth: 1,
                      borderColor: "#DDD",
                    },
                  ]}
                >
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>수량</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>00개 이상</Text>
                </View>
              </View>
            </View>

            <View style={[styles.confirmContentContainer, { height: 60 }]}>
              <View style={styles.signPaintingContainer}>
                <Image
                  source={require(`../../assets/setAnchor.png`)}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmContentRow}>
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>품명</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>세트앵커</Text>
                </View>
                <View
                  style={[
                    styles.confirmContentRow,
                    {
                      borderTopWidth: 1,
                      borderColor: "#DDD",
                    },
                  ]}
                >
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>수량</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>00개 이상</Text>
                </View>
              </View>
            </View>

            <Text style={styles.chooseText}>또는</Text>

            <View style={[styles.confirmContentContainer, { height: 60 }]}>
              <View style={styles.signPaintingContainer}>
                <Image
                  source={require(`../../assets/directConnectionScrew.png`)}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmContentRow}>
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>품명</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>직결나사</Text>
                </View>
                <View
                  style={[
                    styles.confirmContentRow,
                    {
                      borderTopWidth: 1,
                      borderColor: "#DDD",
                    },
                  ]}
                >
                  <View style={styles.confirmContextText1Container}>
                    <Text style={styles.confirmContentText1}>수량</Text>
                  </View>
                  <Text style={styles.confirmContentText2}>00개 이상</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      );
    }

    setModal(true);
  };

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

      <View style={styles.formContainer}>
        <View style={styles.formTextInputContainer}>
          <Text style={globalStyles.formTextInputTitle}>간판사진</Text>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.8}
            onPress={() => handleConfirmModal("간판사진", "signImage")}
          >
            <Text style={styles.buttonText}>미리 보기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formTextInputContainer}>
          <Text style={globalStyles.formTextInputTitle}>원색도안</Text>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.8}
            onPress={() => handleConfirmModal("원색도안", "designImage")}
          >
            <Text style={styles.buttonText}>미리 보기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formTextInputContainer}>
          <Text style={globalStyles.formTextInputTitle}>소유자승락서</Text>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.8}
            onPress={() =>
              handleConfirmModal("소유자승락서", "ownerConsentImage")
            }
          >
            <Text style={styles.buttonText}>미리 보기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formTextInputContainer}>
          <Text style={globalStyles.formTextInputTitle}>시방서</Text>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.8}
            onPress={() => handleConfirmModal("시방서", "specificationImage")}
          >
            <Text style={styles.buttonText}>미리 보기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formTextInputContainer}>
          <Text style={globalStyles.formTextInputTitle}>설계도</Text>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.8}
            onPress={() => handleConfirmModal("설계도", "materialPlan")}
          >
            <Text style={styles.buttonText}>미리 보기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ServiceApplicationConfirmLocalGovernment")
        }
        style={globalStyles.bottomFullWidthButton}
        activeOpacity={0.8}
      >
        <Text style={globalStyles.wideButtonText}>다음</Text>
      </TouchableOpacity>

      <Modal visible={modal}>
        <TitleBar>
          <View style={globalStyles.emptyView}></View>
          <Text style={globalStyles.ScreenTitle}>{confirmTitle}</Text>
          <View style={globalStyles.emptyView}></View>
        </TitleBar>

        {confirmContent}

        <TouchableOpacity
          onPress={() => setModal(false)}
          style={globalStyles.bottomFullWidthButton}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.wideButtonText}>닫기</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
