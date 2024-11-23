import { CartItemComp } from "@/components/CartItem";
import { CartItemDicionary, CartState } from "@/stores/cartStore";
import { SafeAreaView, StyleSheet, FlatList} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const cartItems = useSelector<CartState, CartItemDicionary>((state) => state.cartItems)
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={Object.values(cartItems)}
            keyExtractor={({id}) => String(id)}
            renderItem={({item}) => (
              <CartItemComp key={item.id} {...item}/>
            )}/>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });