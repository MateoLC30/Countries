import React from 'react';
import { ViewCountries }  from "../components/ViewCountries";
import { View, Text } from "react-native";
import styles from "../components/Layout";

export const HomeScreen = () => {

    return(
    <View style={styles.container}>
        <ViewCountries />
    </View>
)
}
