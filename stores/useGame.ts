import { create } from "zustand";

type GameState = {
    gameover: boolean;
    gameclear: boolean;
    actions: {
        setGameover: () => void;
        setGameclear: () => void;
        resetGame: () => void;
    };
};

export const useGameStore = create<GameState>((set, get) => ({
    gameover: false,
    gameclear: false,
    actions: {
        setGameover: () => set({ gameover: true }),
        setGameclear: () => set({ gameclear: true }),
        resetGame: () => set({ gameover: false, gameclear: false }),
    },
}));
