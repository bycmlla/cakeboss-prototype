import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Montserrat_300Light, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";
import { Home } from "./screens/Home/Home";
import Logo from "./assets/images/icons/logo.png";

const Stack = createNativeStackNavigator();

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitle: ({ children }) => <CustomHeader title={children} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: "O que deseja fazer?" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  header: {
    backgroundColor: "#FEA500",
  },
  headerTitle: {
    color: "white",
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 30,
    marginTop: -15,
    marginBottom: 10
  },
});
