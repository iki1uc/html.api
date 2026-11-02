const whitelist = [
  "emit", "set", "on",
  "aura", "fokus", "life", "mana", "zen",
  "atom", "city", "bio_root",
  "co2", "gamma", "h2o", "ice", "ler", "temp"
];

function classifyKey(key) {
  return whitelist.includes(key) ? "kept" : "dropped";
}
