import * as path from "https://deno.land/std@0.116.0/path/mod.ts";

const input = "input.txt";
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const data = await Deno.readTextFile(`${__dirname}/${input}`);
const values = data.split("\n").map((i) => parseInt(i, 10));

let answer = 0;

// /* First attempt */
// for (let i = 0; i < values.length; i++) {
//   const [a, b, c, d] = [values[i], values[i + 1], values[i + 2], values[i + 3]];
//   if (d === undefined) break;
//   /* b + c are the same in both sums, so we could just remove them */
//   const first = a + b + c;
//   const second = b + c + d;
//   if (second - first > 0) answer += 1;
// }

for (let i = 0; i < values.length; i++) {
  const [first, second] = [values[i], values[i + 3]];
  if (second === undefined) break;
  if (second - first > 0) answer += 1;
}

console.log(answer);
