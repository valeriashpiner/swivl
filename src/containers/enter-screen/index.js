import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

export default class EnterScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ backgroundColor: "#ffffff" }}>
        <Button
          raised
          icon={{ name: "github", type: 'font-awesome'}}
          title="CHECK USERS"
          onPress={() => navigate("listOfUsers", { screen: "listOfUsers" })}
          rounded
        />
      </View>
    );
  }
}
