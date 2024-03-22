import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import { Home } from "./screens/Home/Home";
import Cadastrar from "./screens/Cadastrar/Cadastrar";
import GerarEstoque from "./screens/GerarEstoque/GerarEstoque";
import Precificar from "./screens/Precificar/Precificar";
import Logo from "./assets/images/icons/logo.png";
import Precificar2 from "./screens/Precificar2/Precificar2";
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
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#98680F" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: [styles.header, styles.shadow],
          headerTitleAlign: "center",
          headerTitle: ({ children }) => <CustomHeader title={children} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "O que deseja fazer?" }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ title: "Cadastrar Produto" }}
        />
        <Stack.Screen
          name="Estoque"
          component={GerarEstoque}
          options={{ title: "Estoque de Produtos" }}
        />
        <Stack.Screen
          name="Precificar"
          component={Precificar}
          options={{ title: "Precificação" }}
        />
        <Stack.Screen
          name="Precificar2"
          component={Precificar2}
          options={{ title: "Precificação" }}
        />
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
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    marginTop: -12,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
