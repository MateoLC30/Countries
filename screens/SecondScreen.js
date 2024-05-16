import React, { useEffect, useState } from 'react';
import { Country } from '../api';
import { Text, View, Image } from "react-native";
import  styles  from "../components/Layout";

export const SecondScreen = ({navigation, route}) => {

    const [coun, setCoun] = useState({})
    const [cargando, setCargando] = useState(true)

    const countryRes = async () => {
        const response = await Country(route.params.name);
        //console.log(response)
        setCoun(response[0])
        setCargando(false)
    }


    const getLanguages = () => {
        const languages = coun.languages
        let L = ''
        for (key in languages) {
            
             L = L + languages[key] + ', ';
        }
        return ( <Text> {L} </Text>)
    }


    const Lang = () => {
        return (
            (!cargando) ?
             getLanguages()
             : <Text>cargando...</Text>
        )}
    

    useEffect(() => {
        countryRes();
    }, [])

    const Viewer = (() => {
        return(
            (!cargando) ?
            <Image 
            style={styles.flag}
            source={{uri: coun.flags.png}}></Image>
            : <Text>Cargando...</Text>                   
        )
    })

    return (
        <View style={styles.container}>
            
            <Viewer></Viewer>
            <View style={styles.caracteristics}>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Capital: </Text> {coun.capital}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Population: </Text> {coun.population}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Region: </Text> {coun.region}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Subregion: </Text> {coun.subregion}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Borders: </Text> {coun.borders + ' ,'}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>NativeName: </Text> {coun.name?.official}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Flag: </Text> {coun.flags?.alt}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Map: </Text> {coun.maps?.googleMaps}</Text>
                <Text style={styles.title}><Text style={{fontWeight: 'bold'}}>Languages: </Text> <Lang></Lang> </Text>
            </View>
        </View>
        
    )
}

