import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NotesItem = ({ post, deletePost }) => {
    return (
        <View style={styles.container} key={post.id}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
            <Button
                title="Delete"
                onPress={() => deletePost(post.id)}
                color="grey"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: "#F5F5F5",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
    },
    body: {
        fontSize: 16,
        color: "#333333",
    },
});

export default NotesItem;
