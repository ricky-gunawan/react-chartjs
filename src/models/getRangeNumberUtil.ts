const getRangeNumberUtil = (start: number, end: number) => {
  let NumberArray: Array<number> = [];

  for (let i = start; i <= end; i += 1) {
    NumberArray.push(i);
  }

  return NumberArray;
};

export default getRangeNumberUtil;
