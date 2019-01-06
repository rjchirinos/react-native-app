import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "./ListItem";

const TodoList = props => {
  return (
    <FlatList
      style={styles.list}
      data={props.items}
      renderItem={info => (
        <ListItem
          listItem={info.item.name}
          onItemPressed={() => props.onSelectTask(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%"
  }
});

export default TodoList;
