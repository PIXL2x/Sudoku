import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLevelStore } from "../stores/useLevel";
import { Level } from "../types/level";

import { useEffect, useState } from "react";
import { getBestTime } from "../libs/ExpoStore";

const Page = () => {
    const setLevel = useLevelStore((state) => state.actions.setLevel);

    const [easyBestTime, setEasyBestTime] = useState("N/A");
    const [normalBestTime, setNormalBestTime] = useState("N/A");
    const [hardBestTime, setHardBestTime] = useState("N/A");

    const handlePress = (level: Level) => {
        setLevel(level);
        router.push("play");
    };

    useEffect(() => {
        getBestTime("Easy").then((time) => setEasyBestTime(time));
        getBestTime("Normal").then((time) => setNormalBestTime(time));
        getBestTime("Hard").then((time) => setHardBestTime(time));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Level</Text>
            <Pressable style={styles.button} onPress={() => handlePress("Easy")}>
                <Text style={styles.buttonTextLevel}>Easy</Text>
                <Text style={styles.buttonTextBestTime}>Best: {easyBestTime}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handlePress("Normal")}>
                <Text style={styles.buttonTextLevel}>Normal</Text>
                <Text style={styles.buttonTextBestTime}>Best: {normalBestTime}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handlePress("Hard")}>
                <Text style={styles.buttonTextLevel}>Hard</Text>
                <Text style={styles.buttonTextBestTime}>Best: {hardBestTime}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#cccccc",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
    },
    title: {
        color: "#333333",
        fontSize: 36,
        fontWeight: "700",
        textAlign: "center",
    },
    button: {
        width: 250,
        height: 100,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        gap: 8,
        elevation: 4,
    },
    buttonTextLevel: {
        color: "#cccccc",
        fontSize: 30,
        fontWeight: "600",
    },
    buttonTextBestTime: {
        color: "#cccccc",
        fontSize: 18,
        fontWeight: "400",
    },
});

export default Page;
