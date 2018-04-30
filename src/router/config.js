import React from "react";
import { StackNavigator } from "react-navigation";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import EnterScreen from "../containers/enter-screen";
import FollowerList from "../containers/list-of-followers";
import UserList from "../containers/list-of-users";

export const Routes = StackNavigator(
  {
    enterScreen: {
      screen: EnterScreen,
      navigationOptions: {
        title: "GitHub Users",
        headerStyle: {
          backgroundColor: "#000000"
        },
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        }
      }
    },
    listOfUsers: {
      screen: UserList,
      navigationOptions: ({ navigation }) => ({
        title: "GitHub Users",
        headerStyle: {
          backgroundColor: "#000000"
        },
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        },
        headerRight: <View />,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              type="font-awesome"
              color="rgba(255, 255, 255, 1)"
            />
          </TouchableOpacity>
        )
      })
    },
    listOfFollowers: {
      screen: FollowerList,
      navigationOptions: ({ navigation }) => ({
        title: "Followers",
        headerStyle: {
          backgroundColor: "#000000"
        },
        headerTitleStyle: {
          color: "#ffffff",
          textAlign: "center",
          flex: 1
        },
        headerRight: <View />,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              type="font-awesome"
              color="rgba(255, 255, 255, 1)"
            />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    headerMode: "screen"
  }
);
