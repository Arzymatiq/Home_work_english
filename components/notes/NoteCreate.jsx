import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Post_Api } from "../helper/helper";

const NoteCreate = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleCreate = async () => {
        // Ваша логика создания записи на сервере
        const data = { title, body };

        // Пример использования fetch для отправки данных на сервер
        try {
            const response = await fetch(Post_Api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Успешное создание записи
                console.log("Record created successfully");
                // Можно добавить дополнительные действия после успешного создания записи
            } else {
                // Обработка ошибок при создании записи
                console.error("Failed to create record");
            }
        } catch (error) {
            console.error("Error creating record:", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter body"
                value={body}
                onChangeText={(text) => setBody(text)}
                multiline
            />
            <Button
                title="Create"
                onPress={() => {
                    handleCreate();
                    props.navigation.navigate("Home");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default NoteCreate;
