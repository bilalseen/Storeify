import { StyleSheet } from "react-native";

const baseContainer = {
  height: 40,
  marginHorizontal: 5,
  paddingVertical: 5,
  paddingHorizontal: 20,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "black",
  justifyContent: "center",
};

const styles = StyleSheet.create({
  baseContainer,
  container: {
    ...baseContainer,
  },
  containerActive: {
    ...baseContainer,
    backgroundColor: "black",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
  textActive: {
    fontWeight: "700",
    color: "white",
  },
});

export default styles;
