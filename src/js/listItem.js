import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CurrencyImage } from "./messari";

const PriceUp = (props) => {
    return (
        <Text style={{color: 'green'}}>
            <Text style={{fontWeight: 'bold'}}>&#8599;</Text>
            {props.value}%
        </Text>
    );
}

const PriceDown = (props) => {
    return (
        <Text style={{color: 'red'}}>
            <Text style={{fontWeight: 'bold'}}>&#8600;</Text>
            {Math.abs(props.value)}%
        </Text>
    );
}

const PriceChange = (props) => {
    if (props.change >= 0) {
        return (<PriceUp value={props.change}/>);
    } else {
        return (<PriceDown value={props.change}/>);
    }
}

const CurrencyListItem = (props) => {
    return (
        <View style={[styles.container, {flexDirection: 'row'}]}>
            <CurrencyImage id={props.currency.id}/>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingHorizontal: 12,
            }}>
                <Text style={styles.heading}>{props.currency.name}</Text>
                <Text>{props.currency.symbol}</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
                <Text style={styles.heading}>${props.market.price}</Text>
                <PriceChange change={props.market.percentChange}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 18,
        borderBottomWidth: 2,
        borderColor: 'gray'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export { CurrencyListItem };