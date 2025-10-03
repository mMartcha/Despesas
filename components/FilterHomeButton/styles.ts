import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: "#FFF",
    marginHorizontal: 4,
    borderStyle:"solid"
  },
  containerSelected: {
    borderColor: "#E56425",
    backgroundColor: "rgba(229, 100, 37, 0.08)",
    borderStyle:"dashed"
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
  },
  textSelected: {
    color: "#E56425",
  },
});
