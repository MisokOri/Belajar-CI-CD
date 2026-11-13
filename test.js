const assert = require("node:assert");
const { tambah } = require("./hitung");

assert.strictEqual(tambah(2, 3), 5);
console.log("Semua tes lolos!");
