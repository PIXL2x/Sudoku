import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import Numpad from "./Numpad";
import { SudokuRenderer } from "../libs/SudokuRenderer";

const Board = () => {
    let sudokuRenderer: SudokuRenderer;
    let viewWidth = 0;
    let viewHeight = 0;

    const handleContext = (ctx: ExpoWebGLRenderingContext) => {
        sudokuRenderer = new SudokuRenderer(ctx);
    };

    const handleTouched = (event: GestureResponderEvent) => {
        const touch = event.nativeEvent.changedTouches;
        const x = touch[0].locationX / viewWidth;
        const y = 1 - touch[0].locationY / viewHeight;
        sudokuRenderer.selectCell(x, y);
    };

    const setValue = (value: number) => {
        sudokuRenderer.setValue(value);
    };

    return (
        <View style={styles.container}>
            <GLView
                style={styles.view}
                onContextCreate={handleContext}
                onTouchStart={handleTouched}
                onLayout={(event) => {
                    viewWidth = event.nativeEvent.layout.width;
                    viewHeight = event.nativeEvent.layout.height;
                }}
            />
            <Numpad setValue={setValue} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 20,
    },
    view: {
        width: "100%",
        aspectRatio: 1,
    },
});

export default Board;
