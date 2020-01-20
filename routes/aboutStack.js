import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/About';

import Header from '../shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='About GameZone' />
            }
        }
    },
};

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        }
    }
});

export default aboutStack;
