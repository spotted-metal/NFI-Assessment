import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import { CurrencyListItem } from './listItem';
import { getCurrencyData, getMarketData} from './messari';

const HomeScreen = ({ navigation, route }) => {
    const newKey = route?.params?.newKey;

    return (
        <View style={{flex: 1}}>
            <FlatList
                // data={[
                //     {currency: {id: "1e31218a-e44e-4285-820c-8282ee222035", name: "Bitcoin", symbol: "BTC"}, market: {price: 1234.56, percentChange: -7.89}},
                //     {currency: {id: "21c795f5-1bfd-40c3-858e-e9d7e820c6d0", name: "Ethereum", symbol: "ETH"}, market: {price: 987.65, percentChange: 4.32}},
                // ]}
                // data={() => {
                //     if (newKey) {
                //         setCurrencyList(currencyList.push(newKey));
                //     }
                //     console.log(currencyList);
                //     return currencyList;
                // }}
                // style={{flex: 1, padding: 24}}
                // renderItem={async (item) => {
                //     let currency = await getCurrencyData(item);
                //     let market = await getMarketData(currency.id);

                //     return (<CurrencyListItem currency={currency} market={market}/>);
                // }}
            />
            <View style={{padding: 24}}>
            <Button
                style={{padding: 24}}
                onPress={() => {
                    navigation.navigate('AddCurrency');
                }}
                title="Press me"
            />
            </View>
        </View>
    )
}

const AddCurrencyScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput
                placeholder='Enter a cryptocurrency'
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
            />
            <Button
                onPress={() => {
                    console.log("Add Pressed");
                    navigation.navigate('Home', {newKey: text});
                }}
                title="Add"
            ></Button>
        </View>
    )
}

export {HomeScreen, AddCurrencyScreen};