/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  const [Items,setItems] = useState([
    {key:1,item:'Item 1'},
    {key:1,item:'Item 2'},
    {key:1,item:'Item 3'},
    {key:1,item:'Item 4'},
    {key:1,item:'Item 5'},
    {key:1,item:'Item 6'},
    {key:1,item:'Item 7'},
    {key:1,item:'Item 8'},
    {key:1,item:'Item 9'},
  ]);

  const [refreshing,setRefreshing] = useState(t=false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items,{key:10,item:'Item 10'}]);
    setRefreshing(false);
    }

  return (
      <ScrollView 
      style={styles.body}
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}     
        colors={['blue']}
        />
      }      
      >

      {
        Items.map((item)=>{
          return(
           
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}> {item.item + console.log(item.key)}</Text>
          </View>
          )
        })
      }
    
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item:{
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    
  },
  text: {
    fontSize: 20,
    color: '#000',
    margin: 20,
    
  },

});

export default App;
