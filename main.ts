import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: the fridge's door-alarm grudge, kept on its screen.
// Gate: 1-200 characters, so refuse to write anything out of range.
const line =
  "Door alarm: you opened me 11 times during one phone call. I beeped twice. You apologized to the caller, not to me.";

if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
