import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Page = () => {
    const handlePress = () => {
        router.push("level");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sudoku++</Text>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Play</Text>
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
        fontSize: 48,
        fontWeight: "700",
        textAlign: "center",
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "#cccccc",
        fontSize: 24,
        fontWeight: "600",
    },
});

export default Page;
