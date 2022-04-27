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
  FlatList,

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
    {name:'Item 1'},
    {name:'Item 2'},
    {name:'Item 3'},
    {name:'Item 4'},
    {name:'Item 5'},
    {name:'Item 6'},
    {name:'Item 7'},  
    {name:'Item 8'},
    {name:'Item 9'},
    {name:'Item 10'},
  ]);
  

  const [refreshing,setRefreshing] = useState(t=false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items,{key:10,item:'Item 10'}]);
    setRefreshing(false);
    }

  return (
    <FlatList
      data={Items}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
      // <ScrollView 
      // style={styles.body}
      // refreshControl={
      //   <RefreshControl
      //   refreshing={refreshing}
      //   onRefresh={onRefresh}     
      //   colors={['blue']}
      //   />
      // }      
      // >

      // {
      //   Items.map((item)=>{
      //     return(
           
      //     <View style={styles.item} key={item.key}>
      //       <Text style={styles.text}> {item.item + console.log(item.key)}</Text>
      //     </View>
      //     )
      //   })
      // }
    
      // </ScrollView>
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
