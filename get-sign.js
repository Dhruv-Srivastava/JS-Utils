function getSign(number) {
  if (typeof number !== "number") return undefined;

  if (Number.isNaN(number)) return undefined;

  return number !== 0 ? Math.sign(number) : Object.is(number, -0) ? -1 : 1;
}
