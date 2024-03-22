import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./Style";

const Cadastrar = () => {
  const [productName, setProductName] = useState("");
  const [valorFrito, setValorFrito] = useState("");
  const [peso, setPeso] = useState("");
  const [valorCongelado, setValorCongelado] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  const category = [
    { label: "Selecione", value: "selecione" },
    { label: "Selecione", value: "selecione" },
    { label: "Selecione", value: "selecione" },
  ];
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Insira o nome do Produto:</Text>
          <TextInput
            style={[styles.input, styles.inputLarge]}
            value={productName}
            onChangeText={setProductName}
            placeholder="Ex: Coxinha, Pastel, Kibe..."
            placeholderTextColor="grey"
            fontStyle="italic"
          />
        </View>

        <View style={styles.small}>
          <View>
            <Text style={styles.label}>Valor Frito:</Text>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={valorFrito}
              onChangeText={setValorFrito}
              placeholder="Ex: 1, 1.5,..."
              keyboardType="numeric"
              placeholderTextColor="grey"
              fontStyle="italic"
            />
          </View>
          <View>
            <Text style={styles.label}>Peso (g):</Text>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={peso}
              onChangeText={setPeso}
              placeholder="Ex: 20, 25.5..."
              keyboardType="numeric"
              placeholderTextColor="grey"
              fontStyle="italic"
            />
          </View>
        </View>

        <View style={styles.small}>
          <View>
            <Text style={styles.label}>Valor Congelado:</Text>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              value={valorCongelado}
              onChangeText={setValorCongelado}
              placeholder="Ex: 1, 2, 3..."
              keyboardType="numeric"
              placeholderTextColor="grey"
              fontStyle="italic"
            />
          </View>
          <View>
            <Text style={styles.label}>Categoria:</Text>
            <Dropdown
              style={[styles.dropdown, styles.inputHalf]}
              placeholderStyle={[
                styles.placeholderStyle,
                { fontStyle: "italic", color: "grey" },
              ]}
              data={category}
              labelField="label"
              valueField="value"
              placeholder="Selecione"
              value={categoria}
              onChange={(item) => {
                setCategoria(item.setCategoria);
              }}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição/Observações:</Text>
          <TextInput
            style={[styles.input, styles.inputLarge]}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Ex: Sabores de recheio, tipo da massa..."
            placeholderTextColor="grey"
            fontStyle="italic"
          />
        </View>
        <View style={styles.buttonSwitch}>
          <Entypo name="switch" size={34} color="black" />
          <Text style={styles.buttonswitchText}>
            Deseja adicionar esse produto ao estoque?
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonTextCancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cadastrar;
