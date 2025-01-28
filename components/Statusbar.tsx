import { StyleSheet, Text, View } from "react-native";
import Timer from "./Timer";
import Life from "./Life";
import { useLevelStore } from "../stores/useLevel";

const Statusbar = () => {
    const level = useLevelStore((state) => state.level);

    return (
        <View style={{ width: "100%" }}>
            <View style={styles.container}>
                <Timer color="#cccccc" />
                <Life />
            </View>
            <Text style={styles.level}>{level}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingHorizontal: 16,
        width: "100%",
        height: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
    },
    level: {
        position: "absolute",
        width: "100%",
        height: 24,
        color: "#cccccc",
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 24,
    },
});

export default Statusbar;
