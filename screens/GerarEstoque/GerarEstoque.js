import { styles } from "./Style";
import { View, Text, TextInput, Image } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import Coxinha from "../../assets/images/coxinha.png";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

const GerarEstoque = () => {
  const [procurar, setProcurar] = useState("");
  const [ordem, setOrdem] = useState("");

  const orde = [
    { label: "Selecione", value: "selecione" },
    { label: "Selecione", value: "selecione" },
    { label: "Selecione", value: "selecione" },
  ];

  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  state = {
    currentPage: 1,
  };

  return (
    <View>
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <Octicons name="search" size={24} color="black" style={styles.icon} />
          <TextInput
            style={[styles.input, styles.inputWithIcon]}
            value={procurar}
            onChangeText={setProcurar}
            placeholder="Procurar..."
            placeholderTextColor="grey"
          />
        </View>
        <View>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={[styles.placeholderStyle, { color: "grey" }]}
            data={orde}
            labelField="label"
            valueField="value"
            placeholder="Ordem: "
            value={ordem}
            onChange={(item) => {
              setCategoria(item.setOrdem);
            }}
          />
        </View>
      </View>
      <View style={styles.containerCoxinha}>
        <View style={styles.infos}>
          <Text style={{ fontFamily: "Montserrat_800ExtraBold" }}>ITEM</Text>
          <Text style={{ fontFamily: "Montserrat_800ExtraBold" }}>
            QUANTIDADE
          </Text>
        </View>
        <View style={styles.coxinhaInputContainer}>
          <View style={styles.coxinhaImage}>
            <Image source={Coxinha} style={styles.coxinha} />
          </View>
          <View style={styles.textIcons}>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
              Coxinha
            </Text>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>60</Text>
            <View style={styles.icons}>
              <Octicons name="info" size={24} color="black" />
              <Ionicons name="trash-sharp" size={24} color="red" />
            </View>
          </View>
        </View>
        <View style={styles.coxinhaInputContainer}>
          <View style={styles.coxinhaImage}>
            <Image source={Coxinha} style={styles.coxinha} />
          </View>
          <View style={styles.textIcons}>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
              Coxinha
            </Text>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>60</Text>
            <View style={styles.icons}>
              <Octicons name="info" size={24} color="black" />
              <Ionicons name="trash-sharp" size={24} color="red" />
            </View>
          </View>
        </View>
        <View style={styles.coxinhaInputContainer}>
          <View style={styles.coxinhaImage}>
            <Image source={Coxinha} style={styles.coxinha} />
          </View>
          <View style={styles.textIcons}>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
              Coxinha
            </Text>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>60</Text>
            <View style={styles.icons}>
              <Octicons name="info" size={24} color="black" />
              <Ionicons name="trash-sharp" size={24} color="red" />
            </View>
          </View>
        </View>
        <View style={styles.coxinhaInputContainer}>
          <View style={styles.coxinhaImage}>
            <Image source={Coxinha} style={styles.coxinha} />
          </View>
          <View style={styles.textIcons}>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
              Coxinha
            </Text>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>60</Text>
            <View style={styles.icons}>
              <Octicons name="info" size={24} color="black" />
              <Ionicons name="trash-sharp" size={24} color="red" />
            </View>
          </View>
        </View>
        <View style={styles.coxinhaInputContainer}>
          <View style={styles.coxinhaImage}>
            <Image source={Coxinha} style={styles.coxinha} />
          </View>
          <View style={styles.textIcons}>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
              Coxinha
            </Text>
            <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>60</Text>
            <View style={styles.icons}>
              <Octicons name="info" size={24} color="black" />
              <Ionicons name="trash-sharp" size={24} color="red" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
      <View style={styles.paginationContainer}>
        <Text style={styles.pageNumber}><EvilIcons name="chevron-left" size={24} color="black" /></Text>
      </View>
      <View style={[styles.paginationContainer, styles.blueNumber]}>
        <Text style={styles.pageNumber}>1</Text>
      </View>
      <View style={styles.paginationContainer}>
        <Text style={styles.pageNumber}>2</Text>
      </View>
      <View style={styles.paginationContainer}>
        <Text style={styles.pageNumber}>3</Text>
      </View>
      <View style={styles.paginationContainer}>
        <Text style={styles.pageNumber}>4</Text>
      </View>
      <View style={styles.paginationContainer}>
        <Text style={styles.pageNumber}>12</Text>
      </View>
      <View style={styles.paginationContainer}>
        <Text style={styles.pageNumber}><EvilIcons name="chevron-right" size={24} color="black" /></Text>
      </View>
    </View> 
    </View>
  );
};

export default GerarEstoque;
