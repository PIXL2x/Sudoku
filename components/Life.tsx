import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLifeStore } from "../stores/useLife";

const Life = () => {
    const life = useLifeStore((state) => state.value);

    return (
        <View style={styles.container}>
            {Array.from({ length: life }, (_, i) => (
                <AntDesign key={i} name="heart" size={18} color="#cccccc" />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
    },
    text: {
        color: "#cccccc",
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 24,
    },
});

export default Life;
