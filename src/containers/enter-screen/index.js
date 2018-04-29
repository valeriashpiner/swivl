import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-elements";

import { githubLogo } from '../../assets';
import styles from './styles';

export default class EnterScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'GitHub Users',
    headerStyle: {
    backgroundColor: '#000000'
    },
    headerTitleStyle: { color: '#ffffff' }
  });
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <Image source={githubLogo} style={styles.logo} />
        <Button
          raised
          title="CHECK USERS"
          onPress={() => navigate("listOfUsers", { screen: "listOfUsers" })}
          rounded
          backgroundColor='#000000'
          color='#ffffff'
        />
      </View>
    );
  }
}
