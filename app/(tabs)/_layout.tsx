import { cartStore } from '@/stores/cartStore';
import { Tabs } from 'expo-router';
import { Provider } from 'react-redux';

export default function TabLayout() {
  return (
    <Provider store={cartStore}>
        <Tabs>
        <Tabs.Screen name="index" options={{title: "Home"}}/>
        <Tabs.Screen name="cart" options={{title: "Cart"}}/>
        </Tabs>
    </Provider>
  );
}