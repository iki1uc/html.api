function classifyKey(key) {
  if (whitelist.includes(key)) return "kept";
  if (contested.has(key)) return "contested";
  return "dropped";
}
