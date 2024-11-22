import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { cartStore } from "../stores/cartStore"

export default function RootLayout() {
  return (
    <Provider store={cartStore}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  )

}
