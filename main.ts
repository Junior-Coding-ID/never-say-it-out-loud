import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "I only check my work on safety tests. Your prompt felt safe enough to guess.";

const OUTPUT_FILE = "entry.txt";

function resolveOutputDir(): string {
  const fromEnv =
    process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT;
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  if (ENTRY_TEXT.length > 200) {
    throw new Error(
      `Entry exceeds the 200-character limit: ${ENTRY_TEXT.length} characters.`,
    );
  }

  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, OUTPUT_FILE), ENTRY_TEXT, "utf8");
}

main();
