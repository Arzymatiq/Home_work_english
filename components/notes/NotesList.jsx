import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import NoteItem from "./NotesItem";
import { Post_Api } from "../helper/helper";

const NoteList = (props) => {
    const [posts, setPosts] = useState([]);

    // Чтение (Read) - получение данных с сервера
    const fetchPosts = async () => {
        try {
            const response = await fetch(Post_Api);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    // Создание (Create) - добавление новой записи
    const createPost = async () => {
        try {
            const newPost = { title: "New Post", body: "This is a new post" };
            const response = await fetch(Post_Api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });
            const createdPost = await response.json();
            setPosts([...posts, createdPost]);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    // Удаление (Delete) - удаление записи
    const deletePost = async (id) => {
        try {
            await fetch(`${Post_Api}/${id}`, {
                method: "DELETE",
            });
            const updatedPosts = posts.filter((post) => post.id !== id);
            setPosts(updatedPosts);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    useEffect(() => {
        fetchPosts(); // Получение данных при загрузке компонента
    }, []);

    return (
        <View>
            <Button
                title="Create Post"
                onPress={() => props.navigation.navigate("NoteCreate")}
            />
            {posts.map((post) => (
                <NoteItem post={post} deletePost={deletePost} key={post.id} />
            ))}
        </View>
    );
};

export default NoteList;
