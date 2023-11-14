import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../components/homePage/HomePage";
import NewsList from "../components/news/NewsList";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="News" component={NewsList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
