import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  inputLarge: {
    height: 70,
  },
  inputHalf: {
    width: 170,
    height: 70,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "Montserrat_800ExtraBold",
  },
  small: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#FCFF72",
    borderRadius: 5,
    paddingVertical: 20,
    alignItems: "center",
    marginLeft: 20,
    marginTop: 30,
    marginRight: 70,
    elevation: 3,
    width: "90%",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Montserrat_800ExtraBold",
  },
  buttonFinalizar: {
    backgroundColor: "#FE4A49",
    borderRadius: 5,
    paddingVertical: 20,
    alignItems: "center",
    marginLeft: 80,
    marginTop: 30,
    marginRight: 70,
    elevation: 3,
    width: "60%",
  },
  buttonTextFinalizar: {
    color: "black",
    fontSize: 20,
    fontFamily: "Montserrat_800ExtraBold",
  },
});
