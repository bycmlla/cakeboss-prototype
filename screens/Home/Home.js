import React from "react";
import { View, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style.js";

const data = [
  { id: 1, image: require("../../assets/images/gerar.png"), path: "Cadastrar" },
  {
    id: 2,
    image: require("../../assets/images/cadastrar.png"),
    path: "Cadastrar",
  },
  {
    id: 3,
    image: require("../../assets/images/precificar.png"),
    path: "Precificar",
  },
  {
    id: 4,
    image: require("../../assets/images/adicionar.png"),
    path: "Adicionar",
  },
  {
    id: 5,
    image: require("../../assets/images/gerenciar.png"),
    path: "Gerenciar",
  },
  {
    id: 6,
    image: require("../../assets/images/estatistica.png"),
    path: "Estatistica",
  },
  {
    id: 7,
    image: require("../../assets/images/visualizar.png"),
    path: "Estoque",
  },
  {
    id: 8,
    image: require("../../assets/images/creditos.png"),
    path: "Creditos",
  },
];

const renderOptions = ({ item, index }, navigation) => {
  const onPressImage = () => {
    if (item.path) {
      navigation.navigate(item.path);
    } else {
      console.log("Path not specified for item:", item);
    }
  };

  if (index % 2 === 0) {
    return (
      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.containerData} onPress={onPressImage}>
          <Image source={item.image} style={styles.imageData} />
        </TouchableOpacity>
        {data[index + 1] && (
          <TouchableOpacity style={styles.containerData} onPress={onPressImage}>
            <Image source={data[index + 1].image} style={styles.imageData} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return null;
};

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) =>
          renderOptions({ item, index }, navigation)
        }
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.optionsContainer}
        numColumns={1}
      />
    </View>
  );
};
