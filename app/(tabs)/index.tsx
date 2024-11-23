import { Text, SafeAreaView, StyleSheet, TextInput, 
  ActivityIndicator, FlatList, View } from "react-native";
import { useState, useEffect } from "react";

import {Item, ListItem} from "../../components/ListItem"

const API_ENDPOINT = "https://retoolapi.dev/f0ee0v/items"

export default function App() {
  const [data, setData] = useState<Item[]>([]);
  const [searchData, setSearchData] = useState<Item[]>([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    getItemsFromApi();
  }, []);

  const getItemsFromApi = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const json = await response.json();
      setData(json);
      setSearchData(json);
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false);
    }
  };


  const handleSearch = (query: string) => {
    setSearchData(
      data.filter((item) => {
        if(item.name == null){
          return false
        }
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.textHeader}>Order Book</Text>
        <TextInput 
          placeholder="Search items"
          clearButtonMode="always"
          style={styles.searchBox}
          onChangeText={(event) => handleSearch(event)}
          />
      </View>
      <View style={styles.itemView}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={searchData}
            numColumns={2}
            keyExtractor={({id}) => String(id)}
            renderItem={({item}) => (
              <ListItem {...item}/>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  topView:{
    flex: 1,
    backgroundColor:"#00416A",
  },
  textHeader:{
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "white"
  },
  searchBox:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
  },
  itemView:{
    flex: 6, 
    alignItems:"center",
  },
})