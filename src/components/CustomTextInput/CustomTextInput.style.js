import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});
