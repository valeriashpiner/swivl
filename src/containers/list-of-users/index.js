import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-elements';

import UserItem from '../../components/user-item';
import styles from './styles';

export default class UserList extends React.Component {
  state = {
    users: [],
    since: 1,
    perPage: 5,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    const { since, perPage } = this.state;

    axios
      .get(`https://api.github.com/users?since=${since}&per_page=${perPage}`)
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch(() => {});
  };

  handleLoadMore = () => {
    this.setState(
      {
        perPage: this.state.perPage + 5,
      },
      () => {
        this.loadUsers();
      },
    );
  };

  handleStopLoad = () => {
    this.setState({
      perPage: 100,
    });
  };

  render() {
    const { users, perPage } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        {users && (
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <UserItem item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id.toString()}
            onEndThreshold={0}
          />
        )}
        <Button
          large
          title="Load more"
          containerViewStyle={styles.button}
          icon={{ name: 'github', type: 'font-awesome' }}
          backgroundColor="#000000"
          color="#ffffff"
          onPress={perPage <= 95 ? this.handleLoadMore : this.handleStopLoad}
        />
      </View>
    );
  }
}

UserList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
