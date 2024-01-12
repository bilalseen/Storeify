import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeContainer: {
    width: 200,
    minHeight: 250,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 8,
    paddingBottom: 20,
  },
  topContainer: {
    alignItems: "flex-end",
  },
  priceText: {
    textAlign: "center",
    backgroundColor: "orange",
    borderBottomLeftRadius: 10,
    padding: 5,
    borderTopRightRadius: 8,
    minWidth: 50,
  },
  inlineContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    gap: 20,
  },
  productImage: {
    minHeight: 150,
    width: 150,
    resizeMode: "contain",
    backgroundColor: "white",
    padding: 10,
  },
  productTitle: {
    textAlign: "center",
  },
});
