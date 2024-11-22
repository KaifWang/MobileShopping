import { Text, SafeAreaView, StyleSheet, TextInput, 
    ActivityIndicator, FlatList, View, Image, 
    Button} from "react-native";


export function CartItemComp(item : CartItem) {
    return(
        <View style={styles.container}>
        <Text style={styles.textId}>
          {item.id}
        </Text>
        <Text style={styles.textName}>
          {item.name}
        </Text>
        <Text style={styles.textCount}>
          {item.count}
        </Text>
      </View>
    );
}


export interface CartItem {
    id: number,
    count: number,
    name: string,
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
    textId:{
      color: 'blue',
      fontSize: 13,
    },
    textName: {
      fontSize: 13,
      fontWeight: "800",
    },
    textCount:{
      color: "green",
      fontSize: 13,
      fontWeight: "600",
    }
  })