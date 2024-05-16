import { StyleSheet }  from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
        paddingTop: 20,
        gap: 20,
    },
    ItemsContainer: {
        width: '95%',
        height: '95%',
        paddingRight: 0,
    },
    ItemsContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '100%',
        padding: 10,
        gap: 5,
        },
    Item: {
        minWidth: 100,
        maxWidth: 100,
        height: 100,
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        margin: 2
    },
    contentInfo: {
        width: '100%',
        heigth: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    caracteristics: {
        width: '95%',
        height: '100%',
        alignItems: 'flex-start',
        gap: 1,
        paddingTop: 25,
    },
    flag: {
        width: '95%',
        height: '30%',
        borderWidth: 1,
        borderRadius: 20
    },
    title: {
        fontSize: 16
    },
    search: {
        width: '100%',
        height: 50,
        fontSize: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    searchBar: {
        width: '70%',
        height: '100%',
        margin: 0,
        backgroundColor: '#D0D3D4'
    },
    buttonSearchContent: {
        width: 55,
        height: '100%',
        justifyContent: 'center'
    },
    buttonSearch: {
        width: '100%',
        height: 30,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    textSearch: {
        fontWeight: 'bold',
        color: 'white',
    }
})

export default styles