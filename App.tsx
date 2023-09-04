const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ThemeLightTypeActiveStat from "./components/ThemeLightTypeActiveStat";
import ThemeLightTypeActiveStat1 from "./components/ThemeLightTypeActiveStat1";
import SizeSmallIconiconChevron from "./components/SizeSmallIconiconChevron";
import StylestandardCompletedon from "./components/StylestandardCompletedon";
import StylestandardCompletedoff from "./components/StylestandardCompletedoff";
import StylestandardCompletedon1 from "./components/StylestandardCompletedon1";
import DarkModeFalseActiveFalse from "./components/DarkModeFalseActiveFalse";
import DarkModeFalseTypeDefault from "./components/DarkModeFalseTypeDefault";
import StylestandardCompletedoff1 from "./components/StylestandardCompletedoff1";
import StylestandardCompletedoff2 from "./components/StylestandardCompletedoff2";
import SizeSmallIconiconChevron1 from "./components/SizeSmallIconiconChevron1";
import ProfileEdit from "./screens/ProfileEdit";
import Business2 from "./screens/Business2";
import Business1 from "./screens/Business1";
import Space1 from "./screens/Space1";
import Bookings3 from "./screens/Bookings3";
import Profile2 from "./screens/Profile2";
import Profile1 from "./screens/Profile1";
import SignOut from "./screens/SignOut";
import SignOut1 from "./screens/SignOut1";
import SettingsSecurityEditProfile from "./screens/SettingsSecurityEditProfile";
import SettingsScrolled from "./screens/SettingsScrolled";
import SettingsNotificationsScrolle from "./screens/SettingsNotificationsScrolle";
import SettingsSecurityChangePassw from "./screens/SettingsSecurityChangePassw";
import SettingsSecurityChangePassw1 from "./screens/SettingsSecurityChangePassw1";
import SettingsSecurityScrolled from "./screens/SettingsSecurityScrolled";
import SettingsSecurity from "./screens/SettingsSecurity";
import SettingsNotifications from "./screens/SettingsNotifications";
import Settings from "./screens/Settings";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business2"
              component={Business2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Business1"
              component={Business1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Space1"
              component={Space1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bookings3"
              component={Bookings3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={Profile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignOut"
              component={SignOut}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignOut1"
              component={SignOut1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsSecurityEditProfile"
              component={SettingsSecurityEditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsScrolled"
              component={SettingsScrolled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsNotificationsScrolle"
              component={SettingsNotificationsScrolle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsSecurityChangePassw"
              component={SettingsSecurityChangePassw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsSecurityChangePassw1"
              component={SettingsSecurityChangePassw1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsSecurityScrolled"
              component={SettingsSecurityScrolled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsSecurity"
              component={SettingsSecurity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsNotifications"
              component={SettingsNotifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
