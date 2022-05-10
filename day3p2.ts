import { readFileSync } from "fs";

const inputData = readFileSync("day3.txt", "utf8").split("\n");

const length = inputData[0].length;

let oxygenGenerator = [...inputData];
let c02Scrubber = [...inputData];

for (let bitIndex = 0; bitIndex < length; bitIndex++) {
  let valuesO = 0;
  let valuesC = 0;

  for (const line of oxygenGenerator) {
    valuesO += line[bitIndex] === "1" ? 1 : 0;
  }
  for (const line of c02Scrubber) {
    valuesC += line[bitIndex] === "1" ? 1 : 0;
  }

  if (oxygenGenerator.length > 1) {
    const count1 = valuesO;
    const count0 = oxygenGenerator.length - count1;
    const target = count1 >= count0 ? "1" : "0";
    oxygenGenerator = oxygenGenerator.filter(
      (value) => value[bitIndex] === target
    );
  }

  if (c02Scrubber.length > 1) {
    const count1 = valuesC;
    const count0 = c02Scrubber.length - count1;
    const target = count1 >= count0 ? "0" : "1";
    c02Scrubber = c02Scrubber.filter((value) => value[bitIndex] === target);
  }
}

c02Scrubber.length; //?
oxygenGenerator.length; //?

const oxygenGeneratorBinary = oxygenGenerator.join("");
const c02ScrubberBinary = c02Scrubber.join("");
//binary to decimal
const oxygenGeneratorDecimal = parseInt(oxygenGeneratorBinary, 2);
const c02ScrubberDecimal = parseInt(c02ScrubberBinary, 2);

//two values multiplied
const result = oxygenGeneratorDecimal * c02ScrubberDecimal; //?
