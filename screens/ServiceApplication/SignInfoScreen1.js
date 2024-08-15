import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";
import TitleBar from "../../components/TitleBar.js";
import BackButton from "../../components/BackButton.js";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function SignCategoryScreen({ navigation }) {
  const { dispatch } = useContext(ServiceApplicationContext);
  const [displayPeriodStart, setDisplayPeriodStart] = useState(null);
  const [displayPeriodEnd, setDisplayPeriodEnd] = useState(null);
  const [constructionPeriodStart, setConstructionPeriodStart] = useState(null);
  const [constructionPeriodEnd, setConstructionPeriodEnd] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isValid, setIsValid] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleConfirm = (date) => {
    const formattedDate = formatDate(date);

    if (selectedDate === "displayStart") {
      setDisplayPeriodStart((prevDisplayPeriodStart) => {
        if (displayPeriodEnd && new Date(formattedDate) > new Date(displayPeriodEnd)) {
          setDisplayPeriodEnd(formattedDate);
          return displayPeriodEnd;
        }
        return formattedDate;
      });
    } else if (selectedDate === "displayEnd") {
      setDisplayPeriodEnd((prevDisplayPeriodEnd) => {
        if (displayPeriodStart && new Date(formattedDate) < new Date(displayPeriodStart)) {
          setDisplayPeriodStart(formattedDate);
          return displayPeriodStart;
        }
        return formattedDate;
      });
    } else if (selectedDate === "constructionStart") {
      setConstructionPeriodStart((prevConstructionPeriodStart) => {
        if (constructionPeriodEnd && new Date(formattedDate) > new Date(constructionPeriodEnd)) {
          setConstructionPeriodEnd(formattedDate);
          return constructionPeriodEnd;
        }
        return formattedDate;
      });
    } else if (selectedDate === "constructionEnd") {
      setConstructionPeriodEnd((prevConstructionPeriodEnd) => {
        if (constructionPeriodStart && new Date(formattedDate) < new Date(constructionPeriodStart)) {
          setConstructionPeriodStart(formattedDate);
          return constructionPeriodStart;
        }
        return formattedDate;
      });
    }
    hideDatePicker();
  };
  const validateForm = () => {
    setIsValid(
      displayPeriodStart &&
        displayPeriodEnd &&
        constructionPeriodStart &&
        constructionPeriodEnd
    );
  };

  useEffect(() => {
    dispatch({
      type: "SET_FIELD",
      field: "display_period_start",
      value: displayPeriodStart,
    });
    dispatch({
      type: "SET_FIELD",
      field: "display_period_end",
      value: displayPeriodEnd,
    });
    dispatch({
      type: "SET_FIELD",
      field: "construction_period_start",
      value: constructionPeriodStart,
    });
    dispatch({
      type: "SET_FIELD",
      field: "construction_period_end",
      value: constructionPeriodEnd,
    });

    validateForm();
  }, [
    displayPeriodStart,
    displayPeriodEnd,
    constructionPeriodStart,
    constructionPeriodEnd,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setDisplayPeriodStart(null);
        setDisplayPeriodEnd(null);
        setConstructionPeriodStart(null);
        setConstructionPeriodEnd(null);
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
          <Text style={globalStyles.formTextInputTitle}>표시 기간</Text>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={styles.dateButtonContainer}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedDate("displayStart");
                showDatePicker();
              }}
            >
              <Text style={styles.dateText}>
                {displayPeriodStart ? displayPeriodStart : "시작 날짜 선택"}
              </Text>
            </TouchableOpacity>
            <Icon
              name="tilde"
              size={20}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity
              style={styles.dateButtonContainer}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedDate("displayEnd");
                showDatePicker();
              }}
            >
              <Text style={styles.dateText}>
                {displayPeriodEnd ? displayPeriodEnd : "종료 날짜 선택"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formTextInputContainer}>
          <Text style={globalStyles.formTextInputTitle}>공사(설치) 기간</Text>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={styles.dateButtonContainer}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedDate("constructionStart");
                showDatePicker();
              }}
            >
              <Text style={styles.dateText}>
                {constructionPeriodStart
                  ? constructionPeriodStart
                  : "시작 날짜 선택"}
              </Text>
            </TouchableOpacity>
            <Icon
              name="tilde"
              size={20}
              color="black"
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity
              style={styles.dateButtonContainer}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedDate("constructionEnd");
                showDatePicker();
              }}
            >
              <Text style={styles.dateText}>
                {constructionPeriodEnd
                  ? constructionPeriodEnd
                  : "종료 날짜 선택"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ServiceApplicationSignInfo2")}
        style={[
          globalStyles.bottomFullWidthButton,
          !isValid && globalStyles.disabledWideButton,
        ]}
        activeOpacity={0.8}
        disabled={!isValid}
      >
        <Text style={globalStyles.wideButtonText}>다음</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
