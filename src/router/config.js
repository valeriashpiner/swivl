import { StackNavigator } from 'react-navigation';

import EnterScreen from '../containers/enter-screen';
import FollowerList from '../containers/list-of-followers';
import UserList from '../containers/list-of-users';

export const Routes = StackNavigator({
  enterScreen: {
    screen: EnterScreen,
  },
  listOfUsers: {
    screen: UserList,
  },
  listOfFollowers: {
    screen: FollowerList,
  },
}, {
  headerMode: 'screen',
});
