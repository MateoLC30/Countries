import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { getInfo, searchApi, Country } from '../api';
import { useNavigation } from "@react-navigation/native";
import { Searchbar, TextInput, SafeAreaView } from "react-native-paper";
import { ScrollView } from 'react-native-gesture-handler';
import  styles  from "./Layout";
import { render } from 'react-native-web';

export const ViewCountries = (navigation, route) => {

    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const [cargando, setCargando] = useState(true)
    
    const onChangeSearch = (text) => {
        setText(text);
    }

    const loadData = async () => {
        const countries = await getInfo();
        setData(countries);
        setCargando(false)
    }

    const search = async (t) => {
        const searchA = await searchApi(t);
        setData(searchA)
    }

    useEffect(() => {
        loadData();
    }, [])
    

    const CountryItem = ({country}) => {

        const navigation = useNavigation();
        
            
        return ( 
            
            <TouchableOpacity onPress={() => {navigation.navigate('SecondScreen', {name: country.name.common})}} style={styles.Item}>
                <Text>{country.flag}</Text>    
                <Text style={{fontWeight: 'bold'}}>{country.name.common}</Text>
                <Text>Reg: {country.region}</Text>
            </TouchableOpacity> 
        )}


    const renderItem = (item) => {
        return (
            <CountryItem country={item} key={item.name.common + "Key"}></CountryItem>
            
        )} 

    

    return(
        (!cargando) ?
        <View style={styles.ItemsContainer}>

            <View style={styles.search}>
                
                <Searchbar
                    style={styles.searchBar}
                    placeholder='search'
                    onChangeText={onChangeSearch}/>
            
                <View style={styles.buttonSearchContent}>
                    <TouchableOpacity 
                        onPress={ () => search(text)}
                        style={styles.buttonSearch}>
                            <Text style={styles.textSearch}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

            <ScrollView contentContainerStyle={styles.ItemsContent}>
                  {data.map((item) => renderItem(item))}
            </ScrollView>    
        </View> : <Text>Cargando...</Text>
            
            
    )
}
