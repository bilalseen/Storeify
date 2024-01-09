import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
    maxWidth: 200,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
  },
  text_container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 14,
  },
  price: {
    textAlign: "center",
  },
});
