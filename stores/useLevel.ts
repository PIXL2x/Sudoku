import { create } from "zustand";
import { Level } from "../types/level";

type LevelState = {
    level: Level;
    actions: {
        setLevel: (level: Level) => void;
    };
};

export const useLevelStore = create<LevelState>((set, get) => ({
    level: "easy",
    actions: {
        setLevel: (level: Level) => set({ level }),
    },
}));
