import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const ListItem = props => (
  <TouchableNativeFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text style={{ color: "#fff" }}>{props.listItem}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5
  }
});

export default ListItem;
