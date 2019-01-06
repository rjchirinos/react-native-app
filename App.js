import React from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

import ListItem from "./src/components/ListItem";
import TodoList from "./src/components/TodoList";
import TodoInput from "./src/components/TodoInput";
import ItemExpanded from "./src/components/ItemExpanded";

export default class App extends React.Component {
  state = {
    items: [],
    itemSelected: null
  };

  itemAddedHandler = placeName => {
    if (placeName.trim() !== "") {
      this.setState({
        items: this.state.items.concat({
          key: Math.random(),
          value: placeName,
          description: ""
        })
      });
    }
  };

  deleteItemHandler = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => {
          return item.key !== prevState.itemSelected.key;
        }),
        itemSelected: null
      };
    });
  };

  itemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        itemSelected: prevState.items.find(item => {
          return item.key === key;
        })
      };
    });
  };

  closeItemHandler = () => {
    this.setState({
      itemSelected: null
    });
  };

  addDescriptionHandler = description => {
    this.setState(prevState => {
      return {
        itemSelected: {
          key: prevState.itemSelected.key,
          value: prevState.itemSelected.value,
          description: description
        }
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ItemExpanded
          itemSelected={this.state.itemSelected}
          onCloseItem={this.closeItemHandler}
          description={this.state.description}
          addDescription={this.addDescriptionHandler}
          onDelete={this.deleteItemHandler}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            paddingTop: 20,
            color: "#fff"
          }}
        >
          Tasks!
        </Text>
        <TodoInput handleClick={this.itemAddedHandler} />
        <View style={styles.list}>
          <TodoList
            items={this.state.items}
            onItemDeleted={this.itemSelectedHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#010014",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  list: {
    width: "100%",
    alignItems: "flex-start"
  }
});
