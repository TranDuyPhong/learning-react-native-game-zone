import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../shared/Card';
import ReviewForm from './ReviewForm';

import { globalStyles } from '../styles/global';

export default function Home(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Title 1', rating: 3, body: 'Body 1', key: '1' },
        { title: 'Title 2', rating: 2, body: 'Body 2', key: '2' },
        { title: 'Title 3', rating: 4, body: 'Body 3', key: '3' }
    ]);

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews((previousReviews) => {
            return [
                review,
                ...previousReviews
            ];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' size={24} onPress={() => setModalOpen(false)} color='#000' style={{
                            ...styles.modalToggle,
                            ...styles.modalClose
                        }} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24} onPress={() => setModalOpen(true)} color='#000' style={styles.modalToggle} />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalContent: {

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f2f2f2',
        padding: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
});