import React from "react";
import { View, Text, Modal, TextInput, Button, StyleSheet } from "react-native";

class ItemExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ description: "" });
  }

  handleChange = val => {
    this.setState({
      description: val
    });
  };

  // renderDescription = () => {
  //   if (this.props.itemSelected) {
  //     if (this.props.itemSelected.description !== "") {
  //       return (
  //         <Text style={styles.description}>
  //           {this.props.itemSelected.description}
  //         </Text>
  //       );
  //     } else {
  //       return (
  //         <View style={styles.inputView}>
  //           <TextInput
  //             style={styles.input}
  //             value={this.state.description}
  //             onChangeText={this.handleChange}
  //             placeholder="Add a description!"
  //             underlineColorAndroid="transparent"
  //             selectionColor="#fff"
  //           />
  //           <Button
  //             title="Add"
  //             style={styles.button}
  //             value={""}
  //             onPress={() => this.props.addDescription(this.state.description)}
  //             color="rgba(255, 255, 255, 0.3)"
  //           />
  //         </View>
  //       );
  //     }
  //   } else {
  //     return <Text />;
  //   }
  // };
  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.itemSelected !== null}
        onRequestClose={() => this.props.onDeselectTask()}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            {this.props.itemSelected ? this.props.itemSelected.name : ""}
          </Text>
          <Text style={{ paddingTop: 20, fontWeight: "bold", color: "#fff" }}>
            Date created:{" "}
            {this.props.itemSelected
              ? this.props.itemSelected.date.toDateString()
              : ""}
          </Text>
          <View style={styles.buttonGroup}>
            <View style={{ paddingRight: 5 }}>
              <Button
                title="Back"
                value={""}
                onPress={() => this.props.onDeselectTask()}
                color="rgba(255, 255, 255, 0.3)"
              />
            </View>
            <View style={{ paddingLeft: 5 }}>
              <Button
                title="Delete"
                value={""}
                onPress={() => this.props.onDeleteTask()}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
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
  inputView: {
    paddingTop: 10,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#fff"
  },
  description: {
    color: "#fff"
  },
  button: {
    width: "30%",
    borderRadius: 5
  },
  input: {
    width: "70%",
    color: "#fff"
  },
  buttonGroup: {
    backgroundColor: "#010014",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    padding: 20
  }
});

export default ItemExpanded;
