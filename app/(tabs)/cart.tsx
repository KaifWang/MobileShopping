import { Text, SafeAreaView, StyleSheet} from "react-native";

export default function Cart() {
    return (
        <SafeAreaView style={styles.container}>
          <Text>Cart Page lol</Text>
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