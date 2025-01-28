import { create } from "zustand";

type LifeState = {
    value: number;

    actions: {
        decreaseLife: () => void;
        resetLife: () => void;
    };
};

export const useLifeStore = create<LifeState>((set, get) => ({
    value: 3,
    actions: {
        decreaseLife: () =>
            set((state) => {
                return { value: state.value - 1 };
            }),
        resetLife: () =>
            set(() => ({
                value: 3,
            })),
    },
}));
