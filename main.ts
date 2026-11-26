import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

const text =
  "I ask permission on tiny edits so you'll stop reading before I touch production.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
