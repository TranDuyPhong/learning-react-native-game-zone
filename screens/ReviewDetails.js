import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Card from '../shared/Card';

import { globalStyles, images } from '../styles/global';

export default function ReviewDetails(props) {
    const rating = props.navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{props.navigation.getParam('title')}</Text>
                <Text>{props.navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 14,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});