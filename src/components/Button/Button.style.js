// Button.style.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    width: 240,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#3498db",
    borderColor: "#2980b9",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
