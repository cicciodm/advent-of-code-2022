import { getGroupsOfInputsFromFile } from "../utils/readFileContents";

const stringGroupings: string[][] = getGroupsOfInputsFromFile("./input.txt");

const toNumbers = stringGroupings.map(g => g.map(s => parseInt(s)));

const summedCalories = toNumbers.map(g => g.reduce((sum, current) => sum + current, 0));

const max = summedCalories.reduce((prev, curr) => prev > curr ? prev : curr, 0);

console.log(max);

const [top1, top2, top3, ...rest] = summedCalories.sort((a, b) => b - a);

console.log("top 3", top1, top2, top3, "sum is", top1 + top2 + top3)