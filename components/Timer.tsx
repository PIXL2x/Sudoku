import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { formatTime, useTimerStore } from "../stores/useTimer";

type TimerProps = {
    color: string;
};

const Timer = ({ color }: TimerProps) => {
    const time = useTimerStore((state) => state.time);

    return (
        <View style={styles.container}>
            <FontAwesome5 name="clock" size={18} color={color} />
            <Text style={[styles.text, { color }]}>{formatTime(time)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
    },
    text: {
        width: 60,
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 24,
    },
});

export default Timer;
