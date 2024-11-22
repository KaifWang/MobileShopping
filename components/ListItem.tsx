import { Text, SafeAreaView, StyleSheet, TextInput, 
    ActivityIndicator, FlatList, View, Image, 
    Button} from "react-native";


export function ListItem(item : Item) {
    return(
        <View style={styles.container}>
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
    );
}


export type Item = {
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


const styles = StyleSheet.create({
    image:{
      width: 120,
      height: 120,
      backgroundColor:"white"
    },
    container:{
      paddingVertical: 20,
      paddingHorizontal:20,
      width: 200,
    },
    textSupplier:{
      color: 'blue',
      fontSize: 13,
    },
    textName: {
      fontSize: 13,
      fontWeight: "800",
    },
    textPrice:{
      color: "green",
      fontSize: 13,
      fontWeight: "600",
    }
  })