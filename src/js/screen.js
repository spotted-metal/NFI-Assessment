import React from 'react';
import { Button, FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import CurrencyListItem from './listItem';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <FlatList style={{flex: 1, padding: 24}}/>
            <View style={{padding: 24}}>
            <Button
                style={{padding: 24}}
                onPress={() => {
                    console.log("Home Pressed");
                    navigation.navigate('AddCurrency');
                }}
                title="Press me"
            />
            </View>
        </View>
    )
}

const AddCurrencyScreen = ({ navigation }) => {
    return (
        <View>
            <TextInput></TextInput>
            <Button
                onPress={() => {
                    console.log("Add Pressed");
                    navigation.navigate('Home');
                }}
                title="Press me"
            ></Button>
        </View>
    )
}

export {HomeScreen, AddCurrencyScreen};