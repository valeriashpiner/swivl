import React from 'react';
import { View, FlatList, Button } from 'react-native';
import axios from 'axios';

import UserItem from '../../components/user-item';
import styles from './styles';

export default class UserList extends React.Component {
  state = {
    users: [],
    since: 1,
    perPage: 1,
    isRefreshing: false,
    isLoading: false,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    const { users, since, perPage } = this.state;

    this.setState({ isLoading: true });

    axios
      .get(`https://api.github.com/users?since=${since}&per_page=${perPage}&results=20`)
      .then((res) => {
        this.setState({
          users: res.data,
          isRefreshing: false,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        since: this.state.since + 1,
        isRefreshing: true,
      },
      () => {
        this.loadUsers();
      },
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        perPage: this.state.perPage + 1,
      },
      () => {
        this.loadUsers();
      },
    );
  };

  render() {
    const { users, isRefreshing } = this.state;

    return (
      <View style={styles.container}>
        {users && (
          <FlatList
            data={users}
            renderItem={({ item }) => <UserItem item={item} />}
            keyExtractor={item => item.id}
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            onEndThreshold={0}
          />
        )}
        <Button title="Load" onPress={this.handleLoadMore} />
      </View>
    );
  }
}
