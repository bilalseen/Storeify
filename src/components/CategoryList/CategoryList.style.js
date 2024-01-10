import { StyleSheet } from "react-native";
const baseContainer = {
  height: 40,
  margin: 5,
  padding: 5,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "black",
  justifyContent: "center",
};

export default styles = StyleSheet.create({
  baseContainer,
  container: {
    ...baseContainer,
  },
  containerActive: {
    ...baseContainer,
    backgroundColor: "red",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
  textActive: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
});
