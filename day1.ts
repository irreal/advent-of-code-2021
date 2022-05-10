import { readFileSync } from "fs";

const inputData = readFileSync("day1.txt", "utf8").split("\n");

let previous: number | null = null;
let increases = 0;
for (const line of inputData) {
  const num = parseInt(line);
  if (previous === null) {
    previous = num;
    continue;
  }

  if (num > previous) {
    increases++;
  }

  previous = num;
}

increases;
