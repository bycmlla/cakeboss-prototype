import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputAll: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 190,
    borderWidth: 1.5,
    borderColor: "black",
    backgroundColor: "#F9FBFF",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  inputWithIcon: {
    paddingRight: 30,
  },
  icon: {
    position: "absolute",
    marginLeft: 10,
  },
  dropdown: {
    height: 42.5,
    fontSize: 16,
    width: 190,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: "black",
    backgroundColor: "#F9FBFF",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  containerCoxinha: {
    alignItems: "center",
    marginTop: 30,
  },
  infos: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 6,
  },
  coxinhaInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
  },
  coxinhaImage: {
    borderRightWidth: 1,
    marginLeft: -3,
  },
  coxinha: {
    width: 50,
    height: 50,
    marginRight: 7,
    padding: 10,
  },
  textIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginLeft: 25,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#D6D6D6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  blueNumber: {
    backgroundColor: "#5932EA",
  },
});
