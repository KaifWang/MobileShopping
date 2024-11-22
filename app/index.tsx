import { Text, SafeAreaView, StyleSheet, TextInput, 
  ActivityIndicator, FlatList, View, Image } from "react-native";
import { useState, useEffect } from "react";

const API_ENDPOINT = "https://retoolapi.dev/f0ee0v/items"

type Item ={
  id: number,
  oos: string,
  qoh: string,
  name: string,
  size: string,
  upc1: string,
  upc2: string,
  image: string,
  price: string,
  metadata: string,
  supplier: string,
  unit_size: string,
  created_at: string,
  nacs_category: string,
  discounted_price: string,
  nacs_subcategory: string
}

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
      <Text style={styles.textHeader}>Order Book</Text>
      <TextInput 
        placeholder="Search"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCapitalize="none"
        onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)}
        />
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={searchData}
            keyExtractor={({id}) => String(id)}
            renderItem={({item}) => (
              <View>
                <Image source={{uri: item.image}} style={styles.image}></Image>
                <Text style={styles.textSupplier}>
                  {item.supplier}
                </Text>
                <Text style={styles.textName}>
                  {item.name}
                </Text>
                <Text style={styles.textPrice}>
                  {item.price}
                </Text>
              </View>
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
    marginHorizontal:20,
  },
  textHeader:{
    fontSize: 20,
    fontWeight: "bold",
  },
  searchBox:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8
  },
  image:{
    width: 100,
    height: 100,
  },
  textSupplier:{
    color: 'blue',
    fontSize: 15,
  },
  textName: {
    fontSize: 16,
    fontWeight: "800",
  },
  textPrice:{
    color: "green",
    fontSize: 15,
    fontWeight: "600",
  }


})