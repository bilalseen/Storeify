import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  buttonContainer: {
    width: 240,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
