import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Linking,
} from "react-native";
import tw from "twrnc";
import styled from "styled-components";
import { ScrollView } from "react-native";
import axios from "axios";
import NewsItem from "./NewsItem"; // Импортируйте компонент NewsItem
import { NewsArr } from "../helper/helper"; // Импортируйте NewsArr из правильного пути

function NewsList(props) {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getNews() {
        try {
            const response = await axios.get("http://192.168.251.95:3001/news");

            if (response.status === 200) {
                setNewsList(response.data);
            } else {
                setError(
                    `Failed to fetch data. Status code: ${response.status}`
                );
            }
        } catch (error) {
            setError(`Error fetching data: ${error.message}`);
        }
        setLoading(false);
    }

    useEffect(() => {
        getNews();
        return () => setNewsList([]);
    }, []);

    const toTheOtsenkiKoroche = () => {
        // Действие при нажатии на ссылку
        Linking.openURL("https://docs.google.com/spreadsheets/u/0/?tgif=d");
    };
    const toTheRaspisanie = () => {
        // Действие при нажатии на ссылку
        Linking.openURL(
            "https://docs.google.com/spreadsheets/d/1N_I2dUPpSVdaRaZZ7iQp-rRgmtu3aKva/edit#gid=252578625"
        );
    };

    return (
        <>
            <View
                style={tw`w-full h-30 justify-center items-center bg-blue-600`}>
                <View
                    style={tw`flex-row justify-between items-center w-full h-full mt-5`}>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={() => props.navigation.navigate("Notes")}>
                        <Text style={tw`text-white`}>заметки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={() => props.navigation.navigate("Home")}>
                        <Text style={tw`text-white`}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={toTheRaspisanie}>
                        <Text style={tw`text-white`}>расписание</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={toTheOtsenkiKoroche}>
                        <Text style={tw`text-white`}>оценки</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    {newsList.map((item) => (
                        <NewsItem key={item.id} item={item} props={props} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

export default NewsList;
