import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { User_Api, black_List_API } from "../helper/helper";
import axios from "axios";

const NoteCreate = (props) => {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [blackList, setBlackList] = useState([]);

    const getUser = async () => {
        const blacklistArr = await axios.get(black_List_API);
        setBlackList(blacklistArr);
    };

    useState(() => {
        getUser();
    }, []);

    const handleCreate = async () => {
        const data = { Email, password };

        const pattern = /@iuca\.kg$/;

        if (Email == blackList.user) {
            return () => alert("sorry but you are not the student");
        } else if (!pattern.test(Email)) {
            return () => alert("sorry but you are not the student");
        } else {
            try {
                const response = await fetch(User_Api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    password: JSON.stringify(data),
                });

                if (response.ok) {
                    console.log("Record created successfully");
                } else {
                    console.error("Failed to create record");
                }
            } catch (error) {
                console.error("Error creating record:", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={Email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                multiline
            />
            <Button
                Email="Create"
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
