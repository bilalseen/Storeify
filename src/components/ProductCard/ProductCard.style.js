import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    minHeight: 250,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 8,
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productContent: {
    gap: 5,
  },
  title: {
    fontSize: 12,
  },
  priceText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default styles;
