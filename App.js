import React from 'react';
import { StackNavigator } from 'react-navigation';
import List from './Pages/List';
import Greeter from './Pages/Greeter';

const App = StackNavigator({
    Home: {screen: List},
    Greeter: {screen: Greeter},
});

const STATUSBAR_HEIGHT = Expo.Constants.statusBarHeight;

export default App;
