
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBording, Search,Recomended, Detalies, BestOf, List, ListSearch, DeataliesList, TopBookings, CategoryDetails, Category, AuthTopTab ,Booking,Booked, Sucess, Rooms, ChatMessage} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./screens/Navigation";
import Header from "./components/Header";
import TopTab from "./screens/TopTab";
import BottomSheet from "./screens/BottomSheet";
import UserProvider from "./components/Context";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBording"
          component={OnBording}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recomended"
          component={Recomended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalies"
          component={Detalies}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BestOf"
          component={BestOf}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="List"
          component={List}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="ListSearch"
          component={ListSearch}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="DeataliesList"
          component={DeataliesList}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="TopTab"
          component={TopTab}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CategoryDetails"
          component={CategoryDetails}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Category"
          component={Category}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AuthTopTab"
          component={AuthTopTab}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Booked"
          component={Booked}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Sucess"
          component={Sucess}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="BottomSheet"
          component={BottomSheet}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="ChatMessage"
          component={ChatMessage}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>

  );
}
