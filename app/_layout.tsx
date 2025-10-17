import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { Tabs } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import "react-native-reanimated";

import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";

import DashboardSelected from "../assets/images/graphSelected.svg";
import DashboardUnselected from "../assets/images/graphUnselected.svg";
import HomeSelected from "../assets/images/homeSelectedTab.svg";
import HomeUnselected from "../assets/images/homeTab.svg";
import ReportsSelected from "../assets/images/reportsSelectedTab.svg";
import ReportsUnselected from "../assets/images/reportsTab.svg";

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: "#6B6B6B",
        tabBarLabelStyle: {
          fontFamily: fonts.medium,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: "#E6E6E6",
          height: 64,
          paddingBottom: 6,
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Expenses",
          href: null,
        }}
      />

      <Tabs.Screen
        name="(tabs)/Home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <HomeSelected width={size} height={size} />
            ) : (
              <HomeUnselected width={size} height={size} />
            ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/Expenses/index"
        options={{
          title: "Despesas",
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <ReportsSelected width={size} height={size} />
            ) : (
              <ReportsUnselected width={size} height={size} />
            ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/Dashboards/index"
        options={{
          title: "Dashboards",
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <DashboardSelected width={size} height={size} />
            ) : (
              <DashboardUnselected width={size} height={size} />
            ),
        }}
      />
      
    </Tabs>
  );
}
