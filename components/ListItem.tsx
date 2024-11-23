import { addOneToCart, CartItemDicionary, CartState, removeOneFromCart } from "@/stores/cartStore";
import { Text, SafeAreaView, StyleSheet, TextInput, 
    ActivityIndicator, FlatList, View, Image, 
    Button,
    TouchableHighlight,
    TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useState } from "react";


export function ListItem(item : Item) {
  const dispatch = useDispatch();
  const cartItem = useSelector<CartState, CartItem>((state) => state.cartItems[item.id])
  const [imageError, setImageError] = useState<boolean>(false);

  const renderedCartInfo = cartItem ? 
    <View style={styles.cartView}>
      <TouchableOpacity 
        onPress={() => dispatch(removeOneFromCart({id: item.id, name: item.name}))}>
          <Image source={require("@/assets/cminus.png")} style={styles.buttonImage}></Image>
      </TouchableOpacity>     
      <Text style={styles.textCartCount}> {cartItem.count} in cart</Text> 
    </View> : null;

    return(
        <View style={styles.container}>
          <Image 
          source = {imageError ? require("@/assets/unavailable.jpg") : {uri: item.image}}
          onError = {() => setImageError(true)} 
          style={styles.image}/>
          <Text style={styles.textSupplier}>
            {item.supplier}
          </Text>
          <Text style={styles.textName}>
            {item.name}
          </Text>
          <View style={styles.priceButton}>
            <Text style={styles.textPrice}>
              {item.price}
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(addOneToCart({id: item.id, name: item.name}))}>
                <Image source={require("@/assets/cplus.png")} style={styles.buttonImage}></Image>
            </TouchableOpacity>
            {renderedCartInfo}
          </View>
        </View>
    );
}


export interface Item {
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
      width: 150,
      height: 120,
    },
    container:{
      paddingVertical: 20,
      width: 200,
    },
    textSupplier:{
      color: 'blue',
      fontSize: 13,
      alignSelf:"flex-start"
    },
    textName: {
      fontSize: 13,
      fontWeight: "800",

    },
    textPrice:{
      color: "green",
      fontSize: 13,
      fontWeight: "600",
    },
    priceButton:{
      flexDirection:"row",
      alignItems:"stretch",
      gap: 5
    },
    buttonImage:{
      width: 20,
      height: 20,
    },
    textCartCount:{
      fontSize: 13,
      fontWeight: "600",
    },
    cartView:{
      flexDirection: "row"
    }
  })