import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import TitleBar from "../../components/TitleBar";
import CloseButton from "../../components/CloseButton.js";
import { styles } from "../../styles/ServiceApplicationStyles";
import { globalStyles } from "../../styles/GlobalStyles.js";
import { ServiceApplicationContext } from "../../context/ServiceApplicationContext.js";

export default function SignCategoryScreen({ navigation }) {
  const { dispatch } = useContext(ServiceApplicationContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const signCategory = [
    {
      id: 1,
      label: "벽면이용간판",
      image: require("../../assets/wallSign1.png"),
    },
    { id: 2, label: "돌출간판", image: require("../../assets/wallSign2.png") },
    {
      id: 3,
      label: "지주이용간판",
      image: require("../../assets/wallSign3.png"),
    },
  ];

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSelectedCategory(null);
        setIsValid(false);
      };
    }, [])
  );

  return (
    <View style={styles.serviceApplicationScreen}>
      <TitleBar>
        <View style={globalStyles.emptyView}></View>
        <Text style={globalStyles.ScreenTitle}>간판 유형 선택</Text>
        <CloseButton
          title="서비스 신청"
          destination="UserHome"
          navigation={navigation}
        />
      </TitleBar>

      <View style={styles.signCategoryButtonContainer}>
        {signCategory.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.signCategoryButton,
              selectedCategory === category.id && styles.selectedButton,
            ]}
            activeOpacity={0.8}
            onPress={() => {
              dispatch({
                type: "SET_FIELD",
                field: "sign_category_id",
                value: category.id,
              });
              setSelectedCategory(category.id);
              setIsValid(true);
            }}
          >
            <Text style={styles.signCategoryButtonText}>{category.label}</Text>
            <Image
              source={category.image}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ServiceApplicationConstructionCompany")
        }
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
