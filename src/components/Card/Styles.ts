import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 4
  },
  imageLogo: {
    flex: 1,
    width: "65%",
    resizeMode: "contain",
    marginTop: 10
  },
  carBrand: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic" 
  },
  carName: {
    color: "#fff" as string,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  carLogo: {
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    marginBottom: 30,
    width: 300,
    height: 100,
    padding: 10,
    margin: "auto"
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10
  },
  priceLabel: {
    color: "#fff",
    fontSize: 22
  }
});

export default styles;