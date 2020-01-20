import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='Home GameZone' />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details GameZone'
        }
    }
};

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        }
    }
});

export default homeStack;
