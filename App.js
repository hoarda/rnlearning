import React, { Component } from "react";
import { AppRegistry, Text, TextInput, View, StyleSheet } from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10 }} style={styles}>
        <TextInput
          style={{ height: 40 }}
          style={styles.white}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  white: {
    color: "black",
    fontSize: 25
  }
});
// skip this line if using Create React Native App
AppRegistry.registerComponent("rnlearning", () => PizzaTranslator);
