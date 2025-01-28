import { formatTime } from "../stores/useTimer";
import { Level } from "../types/level";
import * as SecureStore from "expo-secure-store";

export async function getBestTime(level: Level) {
    const time = await SecureStore.getItemAsync(`bestTime-${level}`);
    if (time) {
        return formatTime(parseInt(time));
    }
    return "N/A";
}

export async function setBestTime(level: Level, time: number) {
    await SecureStore.setItemAsync(`bestTime-${level}`, time.toString());
}
