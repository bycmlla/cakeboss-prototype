import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  inputLarge: {
    width: "100%",
    height: 70,
  },
  inputHalf: {
    width: 180,
    height: 70,
  },
  dropdown: {
    height: 40,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "Montserrat_800ExtraBold",
  },
  small: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 20,
  },
  buttonSwitch: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 40,
  },
  buttonswitchText: {
    fontStyle: "italic",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#65FF62",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    marginLeft: 120,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextCancel: {
    color: "red",
    fontFamily: "Montserrat_800ExtraBold",
  },
  cancelButton: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    marginLeft: 120,
    marginTop: 20,
    marginBottom: 30,
  },
});
