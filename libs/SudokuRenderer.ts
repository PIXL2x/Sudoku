import { ExpoWebGLRenderingContext } from "expo-gl";
import { CellData } from "../types/cell";
import { GLRenderer } from "./GLRenderer";
import { generateProblem } from "./ProblemGenerator";
import { useLifeStore } from "../stores/useLife";
import { useGameStore } from "../stores/useGame";
import { useTimerStore } from "../stores/useTimer";
import { useLevelStore } from "../stores/useLevel";
import { setBestTime } from "./ExpoStore";

export class SudokuRenderer {
    glRenderer: GLRenderer;
    cellDatas: CellData[][] = this.GenerateCellData();
    selectedCellPos = [-1, -1];

    constructor(ctx: ExpoWebGLRenderingContext) {
        this.glRenderer = new GLRenderer(ctx);
        this.drawNewFrame();
    }

    GenerateCellData(): CellData[][] {
        const level = useLevelStore.getState().level;
        const [problem, solution] = generateProblem(level);

        const cellDatas: CellData[][] = [];
        for (let i = 0; i < 9; i++) {
            cellDatas.push([]);
            for (let j = 0; j < 9; j++) {
                cellDatas[i].push({
                    idX: j,
                    idY: i,
                    value: problem[i][j],
                    solution: solution[i][j],
                    static: problem[i][j] != 0,
                });
            }
        }

        return cellDatas;
    }

    setValue(value: number) {
        const [x, y] = this.selectedCellPos;
        if (x == -1) return;

        this.cellDatas[y][x].value = value;

        if (this.checkBoardClear()) {
            useGameStore.getState().actions.setGameclear();
            useTimerStore.getState().actions.stopTimer();
            setBestTime(useLevelStore.getState().level, useTimerStore.getState().time);
        }

        if (value != 0 && value != this.cellDatas[y][x].solution) {
            useLifeStore.getState().actions.decreaseLife();
            if (useLifeStore.getState().value <= 0) {
                useGameStore.getState().actions.setGameover();
                useTimerStore.getState().actions.stopTimer();
            }
        }

        this.drawNewFrame();
    }

    selectCell(x: number, y: number) {
        this.selectedCellPos = [Math.floor(x * 9), Math.floor(y * 9)];
        this.drawNewFrame();
    }

    checkBoardClear(): boolean {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (this.cellDatas[y][x].value == 0) return false;

                if (this.cellDatas[y][x].solution != this.cellDatas[y][x].value) return false;
            }
        }
        return true;
    }

    drawNewFrame() {
        this.glRenderer.clear({ r: 0.8, g: 0.8, b: 0.8 });

        //draw selected cell
        if (this.selectedCellPos[0] != -1) {
            const cellX = this.selectedCellPos[0] / 9;
            const cellY = this.selectedCellPos[1] / 9;

            const blockX = Math.floor(cellX * 3) / 3;
            const blockY = Math.floor(cellY * 3) / 3;

            this.glRenderer.addRectColour(cellX, 0, 1 / 9, 1, { r: 0.7, g: 0.7, b: 0.7 });
            this.glRenderer.addRectColour(0, cellY, 1, 1 / 9, { r: 0.7, g: 0.7, b: 0.7 });
            this.glRenderer.addRectColour(blockX, blockY, 1 / 3, 1 / 3, { r: 0.7, g: 0.7, b: 0.7 });
            this.glRenderer.addRectColour(cellX, cellY, 1 / 9, 1 / 9, { r: 0.5, g: 0.5, b: 0.5 });

            const value = this.cellDatas[this.selectedCellPos[1]][this.selectedCellPos[0]].value;
            if (value != 0) {
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (this.cellDatas[i][j].value == value) {
                            this.glRenderer.addRectColour(j / 9, i / 9, 1 / 9, 1 / 9, { r: 0.5, g: 0.5, b: 0.5 });
                        }
                    }
                }
            }
        }

        //draw cell lines
        for (let i = 1; i < 9; i++) {
            const padding = 1 / 9;
            this.glRenderer.addLineColour(0, i * padding, 1, i * padding, 0.005, { r: 0.3, g: 0.3, b: 0.3 });
            this.glRenderer.addLineColour(i * padding, 0, i * padding, 1, 0.005, { r: 0.3, g: 0.3, b: 0.3 });
        }

        //draw block lines
        for (let i = 1; i < 3; i++) {
            const padding = 1 / 3;
            this.glRenderer.addLineColour(0, i * padding, 1, i * padding, 0.01, { r: 0, g: 0, b: 0 });
            this.glRenderer.addLineColour(i * padding, 0, i * padding, 1, 0.01, { r: 0, g: 0, b: 0 });
        }

        //draw numbers
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const padding = 1 / 9;
                const offset = 1 / 18;
                const number = this.cellDatas[i][j].value;
                if (number === 0) continue;

                let valueColor = { r: 0.2, g: 0.2, b: 0.2 };
                if (!this.cellDatas[i][j].static) {
                    if (this.cellDatas[i][j].solution === number) {
                        valueColor = { r: 0, g: 0.2, b: 0.8 };
                    } else {
                        valueColor = { r: 0.8, g: 0.2, b: 0 };
                    }
                }

                this.glRenderer.addNumberColour(j * padding + offset, i * padding + offset, 0.12, number, valueColor);
            }
        }

        this.glRenderer.render();
    }
}
