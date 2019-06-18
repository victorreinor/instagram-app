import { createAppContainer, createStackNavigator } from 'react-navigation';

import Feed from './pages/Feed';
import New from './Pages/New';

export default createAppContainer(
  createStackNavigator({
    Feed,
    New,
  })
);
