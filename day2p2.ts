import { readFileSync } from "fs";

const inputData = readFileSync("day2.txt", "utf8").split("\n");

let x = 0;
let z = 0;
let aim = 0;

const moveMap = {
  forward: (amount) => {
    x += amount;
    z += aim * amount;
  },
  down: (amount) => {
    aim += amount;
  },
  up: (amount) => {
    aim -= amount;
  },
};

for (const line of inputData) {
  const [direction, amount] = line.split(" ");
  moveMap[direction](parseInt(amount));
}

x * z; //?
