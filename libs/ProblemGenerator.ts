import { Level } from "../types/level";

export function generateProblem(level: Level): [number[][], number[][]] {
    const solutions: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillNumbers(solutions);

    let numberOfClues: number;
    switch (level) {
        case "Easy":
            numberOfClues = 25;
            break;
        case "Normal":
            numberOfClues = 40;
            break;
        case "Hard":
            numberOfClues = 55;
            break;
    }

    const problem = solutions.map((row) => [...row]);
    removeNumbers(problem, numberOfClues);

    return [problem, solutions];
}

function fillNumbers(grid: number[][]): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                shuffle(numbers);
                for (const num of numbers) {
                    if (isValid(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (fillNumbers(grid)) {
                            return true;
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function shuffle(array: number[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIdx = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIdx]] = [array[randomIdx], array[i]];
    }
}

function isValid(grid: number[][], row: number, col: number, value: number): boolean {
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === value || grid[i][col] === value) {
            return false;
        }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (grid[i][j] === value) {
                return false;
            }
        }
    }

    return true;
}

function isUnique(grid: number[][]): boolean {
    let solutions = 0;

    function solve(grid: number[][]): boolean {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(grid, row, col, num)) {
                            grid[row][col] = num;
                            if (solve(grid)) {
                                return true;
                            }
                            grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        solutions++;
        return solutions > 1;
    }

    const gridCopy = grid.map((row) => [...row]);
    solve(gridCopy);
    return solutions === 1;
}

function removeNumbers(numbers: number[][], amount: number): number[][] {
    const allCells = Array.from({ length: 81 }, (_, index) => index);
    shuffle(allCells);

    for (let i = 0; i < allCells.length && amount > 0; i++) {
        const row = Math.floor(allCells[i] / 9);
        const col = allCells[i] % 9;

        if (numbers[row][col] !== 0) {
            const backup = numbers[row][col];
            numbers[row][col] = 0;

            if (!isUnique(numbers)) {
                numbers[row][col] = backup;
            } else {
                amount--;
            }
        }
    }

    return numbers;
}
