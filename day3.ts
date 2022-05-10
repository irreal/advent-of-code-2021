import { readFileSync } from "fs";

const inputData = readFileSync("day3.txt", "utf8").split("\n");

const values = [];
for (let i = 0; i < inputData[0].length; i++) {
  values.push(0);
}

for (const line of inputData) {
  for (let i = 0; i < line.length; i++) {
    values[i] += line[i] === "1" ? 1 : 0;
  }
}

const dataMajorityPoint = inputData.length / 2;
const gammaRate = [];
const epsilonRate = [];
values.forEach((val) => {
  gammaRate.push(val >= dataMajorityPoint ? 1 : 0);
  epsilonRate.push(val >= dataMajorityPoint ? 0 : 1);
});

const gammaRateBinary = gammaRate.join(""); //?
const epsilonRateBinary = epsilonRate.join(""); //?

//binary to decimal
const gammaRateDecimal = parseInt(gammaRateBinary, 2); //?
const epsilonRateDecimal = parseInt(epsilonRateBinary, 2); //?

//gamma and epsilon multiplied
const gammaEpsilon = gammaRateDecimal * epsilonRateDecimal; //?
