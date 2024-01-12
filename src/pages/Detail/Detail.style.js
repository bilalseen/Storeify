import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {},
  productImage: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  productDetailsContainer: {
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 26,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 20,
  },
  titleAndRatingContainer: {},
  productTitle: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  ratingContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  productRating: {
    textAlign: "center",
  },
  productDescription: {},
  productPrice: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
