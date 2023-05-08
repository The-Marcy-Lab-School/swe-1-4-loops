const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const { whileToFor, continueGuardClause } = require('./modify');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => {});

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);

  it('whileToFor - no longer uses a while loop', () => {
    const textContent = whileToFor.toString();
    expect(textContent).not.toMatch(/while/);
    expect(textContent).toMatch(/for/);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('whileToFor - it logs from 0 (inclusive) to 5 (exclusive) by 1', () => {
    whileToFor();

    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenNthCalledWith(1, 0);
    expect(log).toHaveBeenNthCalledWith(2, 1);
    expect(log).toHaveBeenNthCalledWith(3, 2);
    expect(log).toHaveBeenNthCalledWith(4, 3);
    expect(log).toHaveBeenNthCalledWith(5, 4);

    const textContent = whileToFor.toString(); // repeated code to avoid automatic pass
    expect(textContent).not.toMatch(/while/);
    expect(textContent).toMatch(/for/);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('continueGuardClause - uses a continue statement', () => {
    const textContent = continueGuardClause.toString();

    expect(textContent).toMatch(/continue/);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('continueGuardClause - it logs from 1 (inclusive) to 5 (exclusive) by 1, skipping 2 and 3', () => {
    continueGuardClause();

    expect(log).toHaveBeenCalledTimes(4);
    expect(log).toHaveBeenNthCalledWith(1, "Sure glad this isn't 2 or 3");
    expect(log).toHaveBeenNthCalledWith(2, 1);
    expect(log).toHaveBeenNthCalledWith(3, "Sure glad this isn't 2 or 3");
    expect(log).toHaveBeenNthCalledWith(4, 4);

    const textContent = continueGuardClause.toString(); // repeated code to avoid automatic pass
    expect(textContent).toMatch(/continue/);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
