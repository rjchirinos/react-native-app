import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          value={this.state.placeName}
          onChangeText={this.handleChange}
          placeholder="Add a task to the list!"
          underlineColorAndroid="transparent"
          selectionColor="#fff"
        />
        <Button
          title="Add"
          style={styles.button}
          value={""}
          onPress={() => this.props.handleClick(this.state.placeName)}
          color="rgba(255, 255, 255, 0.3)"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "30%",
    borderRadius: 5
  },
  input: {
    width: "70%",
    color: "#fff"
  }
});

export default TodoInput;
