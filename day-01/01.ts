
import * as path from "https://deno.land/std@0.116.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const data = await Deno.readTextFile(`${__dirname}/input.txt`);
const values = data.split('\n').map(i => parseInt(i, 10))

let prev = values[0];
let curr: number;
let answer = 0;

values.forEach(val => {
  curr = val;
  if (curr - prev > 0) answer += 1 ;
  prev = val;
})

console.log(answer)