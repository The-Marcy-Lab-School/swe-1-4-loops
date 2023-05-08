const whileToFor = () => {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
};

const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (!(i === 2) && !(i === 3)) {
      console.log("Sure glad this isn't 2 or 3");
      console.log(i);
    }
  }
};

module.exports = {
  whileToFor,
  continueGuardClause,
};
