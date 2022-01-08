
export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export const range = (start: number, end?: number, step: number = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

