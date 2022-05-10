import { readFileSync } from "fs";

const inputData = readFileSync("day1.txt", "utf8").split("\n");

let previous: number[] = [];
let increases = 0;
for (const line of inputData) {
  const num = parseInt(line);
  previous.push(num);
  if (previous.length < 4) {
    continue;
  }
  const previousSum = previous[0] + previous[1] + previous[2];
  const currentSum = previousSum + previous[3] - previous[0];
  if (currentSum > previousSum) {
    increases++;
  }
  previous = previous.slice(1);
}

increases;
