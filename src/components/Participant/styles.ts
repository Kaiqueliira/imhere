import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    flex: 1,
    marginLeft: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
  },
});
