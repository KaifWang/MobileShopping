import { addOneToCart, removeOneFromCart } from "@/stores/cartStore";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";


export function CartItemComp(item : CartItem) {
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            <Text style={styles.textName}>
                {item.name}
            </Text>
            <View style={styles.cartInfo}>
                <TouchableOpacity 
                onPress={() => dispatch(addOneToCart({id: item.id, name: item.name}))}>
                    <Image source={require("@/assets/cplus.png")} style={styles.buttonImage}></Image>
                </TouchableOpacity>
                <Text style={styles.textCount}>
                    {item.count}
                </Text>
                <TouchableOpacity
                onPress={() => dispatch(removeOneFromCart({id: item.id, name: item.name}))}>
                    <Image source={require("@/assets/cminus.png")} style={styles.buttonImage}></Image>
                </TouchableOpacity> 
            </View>

        </View>
    );
}


export interface CartItem {
    id: number,
    count: number,
    name: string,
}


const styles = StyleSheet.create({
    container:{
      paddingVertical: 20,
      paddingHorizontal:20,
      flexDirection: "row",
      justifyContent:"space-between",
    },
    textName: {
      fontSize: 13,
      fontWeight: "800",
    },
    textCount:{
      color: "blue",
      fontSize: 13,
      fontWeight: "600",
    },
    cartInfo:{
        flexDirection:"row",
        alignItems:"stretch",
        justifyContent:"space-around",
        gap: 5
      },
    buttonImage:{
        width: 20,
        height: 20,
      },
  })