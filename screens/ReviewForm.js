import React from 'react';
import {
    View,
    TextInput,
    Button,
    Text
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global';

import FlatButton from '../shared/Button';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm(props) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    props.addReview(values);
                }}
            >
                {(props) => {
                    return (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='Review body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review rating'
                                onChangeText={props.handleChange('rating')}
                                keyboardType='numeric'
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                            <FlatButton text='submit' onPress={props.handleSubmit} />
                        </View>
                    );
                }}
            </Formik>
        </View>
    );
};