import { StyleSheet } from "react-native";

const baseContainer = {
  height: 40,
  marginHorizontal: 5,
  paddingVertical: 5,
  paddingHorizontal: 20,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#EFEFEF",
  justifyContent: "center",
  backgroundColor: "white",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 2,
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
