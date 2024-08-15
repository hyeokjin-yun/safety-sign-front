import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/SignUpScreenStyles.js";
import { globalStyles } from "../../styles/GlobalStyles.js";

export default function SignUpdoneScreen({ navigation }) {
  return (
    <View style={[styles.signUpScreen, { justifyContent: "center" }]}>
      <Text style={styles.signUpDoneGuide}>회원가입이 완료되었습니다.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={globalStyles.bottomFullWidthButton}
        activeOpacity={0.8}
      >
        <Text style={globalStyles.wideButtonText}>홈으로</Text>
      </TouchableOpacity>
    </View>
  );
}
