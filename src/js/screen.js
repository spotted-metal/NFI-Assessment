import React from 'react';
import { Button, FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import CurrencyListItem from './listItem';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={[
                    {currency: {id: "1e31218a-e44e-4285-820c-8282ee222035", name: "Bitcoin", symbol: "BTC"}, market: {price: 1234.56, percentChange: -7.89}},
                    {currency: {id: "21c795f5-1bfd-40c3-858e-e9d7e820c6d0", name: "Ethereum", symbol: "ETH"}, market: {price: 987.65, percentChange: 4.32}},
                ]}
                style={{flex: 1, padding: 24}}
                renderItem={({item}) => <CurrencyListItem currency={item.currency} market={item.market}/>}
            />
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