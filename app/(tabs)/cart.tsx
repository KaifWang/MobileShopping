import { CartItem, CartItemComp } from "@/components/CartItem";
import { addOneToCart, CartItemDicionary, CartState, removeOneFromCart } from "@/stores/cartStore";
import { View, Text, SafeAreaView, StyleSheet, Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const cartItems = useSelector<CartState, CartItemDicionary>((state) => state.cartItems)
    const dispatch = useDispatch();

    const renderedCartItems = Object.values(cartItems).map( (item: CartItem ) =>{
        return <CartItemComp key = {item.id} {...item}/>
    })

    return (
        <SafeAreaView style={styles.container}>
          <Text>Cart Page lol</Text>
          <View>
            {renderedCartItems}
          </View>
          <View>
            <Button 
                title="add to cart"
                onPress={() => dispatch(addOneToCart({id: 3, name: "newItem"}))}
            />
            <Button 
                title="remove from cart"
                onPress={() => dispatch(removeOneFromCart({id: 3, name: "newItem"}))}
            />
          </View>
        </SafeAreaView>
    );
  }




  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });