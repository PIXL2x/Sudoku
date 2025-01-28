import { Pressable, StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import { useGameStore } from "../stores/useGame";
import { router } from "expo-router";

const GameClear: React.FC = () => {
    const handleNewGamePressed = () => {
        router.reload();
    };

    const handleMenuPressed = () => {
        router.dismissAll();
    };

    const gameclear = useGameStore((state) => state.gameclear);

    return (
        gameclear && (
            <View style={styles.screen}>
                <View style={styles.panel}>
                    <Text style={styles.gameclear}>Game Clear!</Text>
                    <Timer color="#333333" />
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPressIn={handleNewGamePressed}>
                            <Text style={styles.buttonText}>New Game</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPressIn={handleMenuPressed}>
                            <Text style={styles.buttonText}>Go To Menu</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    );
};
const styles = StyleSheet.create({
    screen: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    panel: {
        padding: 10,
        elevation: 10,
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
        height: 250,
        backgroundColor: "#cccccc",
        borderRadius: 10,
    },
    gameclear: {
        color: "#333333",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 35,
    },
    buttonContainer: {
        width: "100%",
        display: "flex",
        gap: 10,
    },
    button: {
        elevation: 5,
        height: 40,
        backgroundColor: "#555555",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#cccccc",
        fontSize: 20,
    },
});

export default GameClear;
