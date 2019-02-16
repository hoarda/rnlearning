import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    );
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text style={styles.white}>{this.props.text}</Text>;
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="love blinkk" />
        <Blink text="yes blink is so great" />
        <Blink text="why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me  xd" />
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

AppRegistry.registerComponent("rrlearning", () => BlinkApp);
