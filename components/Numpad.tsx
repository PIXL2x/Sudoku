import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

type NumpadProps = {
    setValue: (value: number) => void;
};

const Numpad = ({ setValue }: NumpadProps) => {
    const handleClick = (i: number) => {
        setValue(i);
    };

    return (
        <View style={styles.column}>
            <View style={styles.row}>
                <Pressable key={1} style={styles.button} onPress={() => handleClick(1)}>
                    <Text style={styles.text}>{1}</Text>
                </Pressable>
                <Pressable key={2} style={styles.button} onPress={() => handleClick(2)}>
                    <Text style={styles.text}>{2}</Text>
                </Pressable>
                <Pressable key={3} style={styles.button} onPress={() => handleClick(3)}>
                    <Text style={styles.text}>{3}</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable key={4} style={styles.button} onPress={() => handleClick(4)}>
                    <Text style={styles.text}>{4}</Text>
                </Pressable>
                <Pressable key={5} style={styles.button} onPress={() => handleClick(5)}>
                    <Text style={styles.text}>{5}</Text>
                </Pressable>
                <Pressable key={6} style={styles.button} onPress={() => handleClick(6)}>
                    <Text style={styles.text}>{6}</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable key={7} style={styles.button} onPress={() => handleClick(7)}>
                    <Text style={styles.text}>{7}</Text>
                </Pressable>
                <Pressable key={8} style={styles.button} onPress={() => handleClick(8)}>
                    <Text style={styles.text}>{8}</Text>
                </Pressable>
                <Pressable key={9} style={styles.button} onPress={() => handleClick(9)}>
                    <Text style={styles.text}>{9}</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable key={10} style={styles.button} onPress={() => handleClick(0)}>
                    <FontAwesome5 name="eraser" size={24} color="black" />
                </Pressable>
                <Pressable key={11} style={styles.button} onPress={() => handleClick(0)}>
                    <Entypo name="pencil" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        paddingHorizontal: 50,
        width: "100%",
        flexDirection: "column",
        gap: 5,
    },

    row: {
        width: "100%",
        flexDirection: "row",
        gap: 5,
    },

    button: {
        padding: 5,
        flex: 1,
        backgroundColor: "#c0c0c0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Numpad;
