import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
    maxWidth: 200,
    padding: 10,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
  },
  text_container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    padding: 5,
  },
  price: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "700",
  },
});
