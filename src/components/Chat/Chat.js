import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // var name = 'najam';
    return (
      <View>
        <Text
          onPress={(e) => {
            console.log("najam I'm a good person");
          }}
        >
          Name
        </Text>
      </View>
    );
  }
}

export default Chat;