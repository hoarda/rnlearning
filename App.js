import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.white}>Hello {this.props.name}! </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  white: {
    fontSize: 20,
    color: "white"
  }
});

export default class LotsofGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="oktay" />
        <Greeting name="hasan" />
        <Greeting name="arda" />
      </View>
    );
  }
}

AppRegistry.registerComponent("rnlearning", () => LotsofGreetings);
