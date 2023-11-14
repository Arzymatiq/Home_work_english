import { StatusBar } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

function NavBar(props) {
    return (
        <View style={tw`w-full h-30 justify-center items-center bg-blue-500`}>
            <View
                style={tw`flex-row justify-between items-center w-full h-full mt-10`}>
                <TouchableOpacity
                    style={tw`flex-1 items-center`}
                    onPress={() => props.navigation.navigate("Home")}>
                    <Text style={tw`text-white`}>главная</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex-1 items-center`}
                    onPress={() => props.navigation.navigate("News")}>
                    <Text style={tw`text-white`}>новости</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 items-center`}>
                    <Text style={tw`text-white`}>расписание</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 items-center`}>
                    <Text style={tw`text-white`}>оценки</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

export default NavBar;
