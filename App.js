import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./components/homePage/HomePage";
import NewsList from "./components/news/NewsList";
import NoteList from "./components/notes/NotesList";
import NavBar from "./components/uiUx/NavBar";
import NoteCreate from "./components/notes/NoteCreate";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { create } from "twrnc";
import Login from "./components/login/Login";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="News"
                    component={NewsList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NoteCreate"
                    component={NoteCreate}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Notes" component={NoteList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
