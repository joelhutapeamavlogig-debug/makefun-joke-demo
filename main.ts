import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent never reproduced a bug in its life — until the demo, where it crashed on the first try, on both machines.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
