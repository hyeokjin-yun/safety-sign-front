import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen.js";
import UserHomeScreen from "../screens/UserHomeScreen.js";
import AgreementScreen from "../screens/SignUp/AgreementScreen.js";
import PhoneAuthScreen from "../screens/SignUp/PhoneAuthScreen.js";
import NameInputScreen from "../screens/SignUp/NameInputScreen.js";
import PwdInputScreen from "../screens/SignUp/PwdInputScreen.js";
import SignUpDoneScreen from "../screens/SignUp/SignUpDoneScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import NoticeScreen from "../screens/ServiceApplication/NoticeScreen.js";
import SignCategoryScreen from "../screens/ServiceApplication/SignCategoryScreen.js";
import ConstructionCompanyScreen from "../screens/ServiceApplication/ConstructionCompanyScreen.js";
import AdministratorScreen from "../screens/ServiceApplication/AdministratorScreen.js";
import SignInfoScreen1 from "../screens/ServiceApplication/SignInfoScreen1.js";
import SignInfoScreen2 from "../screens/ServiceApplication/SignInfoScreen2.js"

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServiceApplicationSignInfo2"
        component={SignInfoScreen2}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="SignUpAgreement"
        component={AgreementScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="SignUpPhoneAuth"
        component={PhoneAuthScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="SignUpNameInput"
        component={NameInputScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="SignUpPwdInput"
        component={PwdInputScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="SignUpDone"
        component={SignUpDoneScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="ServiceApplicationNotice"
        component={NoticeScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="ServiceApplicationSignCategory"
        component={SignCategoryScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="ServiceApplicationConstructionCompany"
        component={ConstructionCompanyScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="ServiceApplicationAdministrator"
        component={AdministratorScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
            <Stack.Screen
        name="ServiceApplicationSignInfo1"
        component={SignInfoScreen1}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  );
}
