import { StyleSheet, View } from "react-native";
import Board from "../components/Board";
import { useEffect } from "react";
import { useTimerStore } from "../stores/useTimer";
import GameOver from "../components/GameOver";
import GameClear from "../components/GameClear";
import Statusbar from "../components/Statusbar";
import { useLifeStore } from "../stores/useLife";
import { useGameStore } from "../stores/useGame";

export default function App() {
    const resetTimer = useTimerStore((state) => state.actions.resetTimer);
    const startTimer = useTimerStore((state) => state.actions.startTimer);
    const resetLife = useLifeStore((state) => state.actions.resetLife);
    const resetGame = useGameStore((state) => state.actions.resetGame);

    useEffect(() => {
        resetTimer();
        startTimer();
        resetLife();
        resetGame();
    }, []);

    return (
        <View style={styles.container}>
            <Statusbar />
            <Board />
            <GameOver />
            <GameClear />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
    },
});
