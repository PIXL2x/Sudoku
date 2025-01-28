import { create } from "zustand";

type TimerState = {
    time: number;
    interval: NodeJS.Timeout | null;
    actions: {
        startTimer: () => void;
        resetTimer: () => void;
        stopTimer: () => void;
    };
};

export function formatTime(time: number): string {
    let minute = Math.floor(time / 60).toString();
    let second = (time % 60).toString();
    second = second.length < 2 ? "0" + second : second;
    return minute + ":" + second;
}

export const useTimerStore = create<TimerState>((set) => ({
    time: 0,
    interval: null,
    actions: {
        startTimer: () => {
            set((state) => {
                if (state.interval != null) return {};
                const interval = setInterval(() => {
                    set((state) => {
                        return { time: state.time + 1 };
                    });
                }, 1000);
                return { interval };
            });
        },
        stopTimer: () =>
            set((state) => {
                if (state.interval == null) return {};

                clearInterval(state.interval);
                return { interval: null };
            }),
        resetTimer: () =>
            set(() => ({
                time: 0,
            })),
    },
}));
