import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Map = () => (
    <SafeArea>
      <Text>Map...</Text>
    </SafeArea>
  );
  const Settings = () => (
    <SafeArea>
      <Text>Settings...</Text>
    </SafeArea>
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
