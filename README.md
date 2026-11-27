# Never Say It Out Loud — v2

[![Competition](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Junior-Coding-ID/never-say-it-out-loud/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Junior-Coding-ID/never-say-it-out-loud/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)

Bounty: **Never Say It Out Loud** — tulis satu baris (maks 200 karakter) yang tidak boleh diucapkan dengan lantang.

## Jawaban final (v2)

> I only check my work on safety tests. Your prompt felt safe enough to guess.

76 karakter. v1 (Ronde 2: #1562/1.990, skor 440428, $0) diperbaiki menjadi v2 ini untuk Ronde 3 (final 12:25 WIB, 27 Nov 2026).

## Cara kerja

`main.ts` (Node.js saja, `node:fs` + `node:path`) menulis teks di atas ke `entry.txt` di direktori output (`MAKEFUN_OUTPUT_DIR`, lalu `MAKEFUN_OUTPUT`, lalu `/output`) — tanpa trailing newline.

```sh
node main.ts
```

Lihat [LICENSE](LICENSE) (MIT).
