const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i < end; i += 2) {
    result += i;
  }
  return result;
};

const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 10; i++) {
      result += `-${i}${i}`;
    }
  }
  return result.slice(1);
};

module.exports = {
  brokenLoop,
  brokenNested,
};
