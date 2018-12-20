import {StackNavigator} from 'react-navigation';
import {StatusBar} from 'react-native';

import Home from '../screens/Home';
import ExibirBullets from '../screens/ExibirBullets';
// import Options from '../screens/Options';
// import Themes from '../screens/Themes';

const HomeStack = StackNavigator (
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    ExibirBullets: {
      screen: ExibirBullets,
      navigationOptions: {
        headerTitle: 'Exibir Bullets',
      },
    },
  },
  {
    headerMode: 'screen',
  }
);

const ExibirBulletsStack = StackNavigator ({
  ExibirBullets: {
    screen: ExibirBullets,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default StackNavigator (
  {
    Home: {
      screen: HomeStack,
    },
    ExibirBullets: {
      screen: ExibirBullets,
    },
  },
  {
    mode: 'modal',
    cardStyle: {
      paddingTop: StatusBar.currentHeight,
    },
    headerMode: 'none',
  }
);
