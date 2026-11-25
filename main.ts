// Everyday Things, Two Lines — a toaster, explained to a 10-year-old.
// Line 1: the analogy (a tiny campfire). Line 2: what the analogy maps
// and what it leaves out (no flame, sugars and proteins changing).
import { mkdirSync, writeFileSync } from "node:fs";

const LINES = [
  "A toaster is a tiny campfire of glowing wires that tans your bread like a day at the beach, and a spring pops it up when the timer rings.",
  "This analogy works because it shows heat browning the outside, but bread isn't sunburned: its sugars and proteins are changing, and there's no actual flame.",
];

function buildEntry(lines: string[]): string {
  const text = lines.join("\n");
  if (text.length < 1 || text.length > 400) {
    throw new Error(`entry is ${text.length} chars, must be 1-400`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  return text;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", buildEntry(LINES), "utf8");
