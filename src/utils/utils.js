export const xFromTranslate = (val = "") => {
  let prop = val.match(/translatex\(-?\d+.*?\)/i)?.[0] ?? "0";
  let x = prop?.match(/-?\d+/)[0] ?? 0;
  return +x;
};

export const randomArray = (min, max, n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
};
