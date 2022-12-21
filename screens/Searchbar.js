//how to add search box in react native?
import React from 'react'
import { FlatList, View, TextInput, Button, StyleSheet , Text } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements';
import data from '../Helpers/FarmersData.js'
import FarmerItem from './FarmerItem'
import { registerRootComponent } from 'expo';

// return data.filter(function (e){return e.City == text}).map(element => <FarmerItem farmer={element} key={element.id} /> );

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          farmers: data ,
          searchedText: "test" // Initialisation de notre donnée searchedText dans le state
        }
    }

    _searchTextInputChanged = async (text) => {
        const newData = await data.filter(e => e.City.toLowerCase() === text.toLowerCase() );

        //change your logic as per your requirement 
        if( newData.length > 0 ){
        this.setState({farmers : newData})
        }else{
        this.setState({farmers : data })
        }
    }

    render() {
        return (
          <>
            <View style={styles.main}>
                <TextInput style={styles.textinput} onChangeText = {(text) => this._searchTextInputChanged(text)} placeholder='Nom du maraicher'/>
                {this.state.farmers.map(element => <FarmerItem farmer={element} key={element.id} /> )}

            </View>
            </>
        );
    }
}

// Components/Search.js
const styles = StyleSheet.create({
    main: {
        flex:1,
        marginTop:30,
        backgroundColor:'white'
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#86d972',
        borderWidth: 1,
        paddingLeft: 5
    }
  })

export default Search


