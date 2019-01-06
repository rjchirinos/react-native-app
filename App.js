import React from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { connect } from "react-redux";

import ListItem from "./src/components/ListItem";
import TodoList from "./src/components/TodoList";
import TodoInput from "./src/components/TodoInput";
import ItemExpanded from "./src/components/ItemExpanded";
import configureStore from "./src/store/configureStore";
import {
  addTask,
  deleteTask,
  selectTask,
  deselectTask
} from "./src/store/actions/index";

class App extends React.Component {
  itemAddedHandler = placeName => {
    this.props.onAddTask(placeName);
  };

  deleteItemHandler = () => {
    this.props.onDeleteTask();
  };

  itemSelectedHandler = key => {
    this.props.onSelectTask(key);
  };

  closeItemHandler = () => {
    this.props.onDeselectTask();
  };

  // addDescriptionHandler = description => {
  //   this.setState(prevState => {
  //     return {
  //       itemSelected: {
  //         key: prevState.itemSelected.key,
  //         value: prevState.itemSelected.value,
  //         description: description
  //       }
  //     };
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        <ItemExpanded
          itemSelected={this.props.taskSelected}
          onDeselectTask={this.closeItemHandler}
          // description={this.state.description}
          // addDescription={this.addDescriptionHandler}
          onDeleteTask={this.deleteItemHandler}
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
        <TodoInput onAddTask={this.itemAddedHandler} />
        <View style={styles.list}>
          <TodoList
            items={this.props.tasks}
            onSelectTask={this.itemSelectedHandler}
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

const store = configureStore();

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    taskSelected: state.tasks.taskSelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: name => dispatch(addTask(name)),
    onDeleteTask: () => dispatch(deleteTask()),
    onSelectTask: key => dispatch(selectTask(key)),
    onDeselectTask: () => dispatch(deselectTask())
  };
};

function connectWithStore(store, WrappedComponent, ...args) {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function(props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
}

export default connectWithStore(
  store,
  App,
  mapStateToProps,
  mapDispatchToProps
);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
