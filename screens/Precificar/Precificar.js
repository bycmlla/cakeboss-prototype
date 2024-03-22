import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useFonts, Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style";

const Precificar = () => {
  const [productName, setProductName] = useState("");
  const [valorFrito, setValorFrito] = useState("");
  const [peso, setPeso] = useState("");
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Montserrat_800ExtraBold });

  if (!fontsLoaded) {
    return null;
  }

  const handleInserirIngredientes = () => {
    navigation.navigate("Precificar2");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Insira o nome da Receita:</Text>
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
          <Text style={styles.label}>Rendimento</Text>
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
          <Text style={styles.label}>Lucro(%)</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleInserirIngredientes}>
        <Text style={styles.buttonText}>Inserir Ingredientes-></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Precificar;

