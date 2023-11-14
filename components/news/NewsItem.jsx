import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import tw from "twrnc";

const NewsItem = ({ item, props }) => {
    const NewsTitle = styled.Text`
        font-size: 15px;
        color: black;
        font-weight: bold;
    `;
    const NewsDesc = styled.Text`
        font-size: 13px;
        color: black;
    `;

    const styles = StyleSheet.create({
        image: {
            width: "100%",
            height: 200,
        },
    });

    return (
        <View style={tw`flex-row items-center mb-20 ml-5 mr-2`}>
            <View style={tw`flex-1`}>
                <Image source={{ uri: item.image }} style={styles.image} />

                <NewsTitle>{item.title}</NewsTitle>
                <NewsDesc>{item.description}</NewsDesc>
            </View>
        </View>
    );
};

export default NewsItem;
