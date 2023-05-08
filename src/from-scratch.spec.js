const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => {});

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);

  it('loop0UpTo10 - it logs from 0 (inclusive) to 10 (exclusive) by 1', () => {
    loop0UpTo10();
    expect(log).toHaveBeenCalledTimes(10);
    expect(log).toHaveBeenNthCalledWith(1, 0);
    expect(log).toHaveBeenNthCalledWith(2, 1);
    expect(log).toHaveBeenNthCalledWith(3, 2);
    expect(log).toHaveBeenNthCalledWith(4, 3);
    expect(log).toHaveBeenNthCalledWith(5, 4);
    expect(log).toHaveBeenNthCalledWith(6, 5);
    expect(log).toHaveBeenNthCalledWith(7, 6);
    expect(log).toHaveBeenNthCalledWith(8, 7);
    expect(log).toHaveBeenNthCalledWith(9, 8);
    expect(log).toHaveBeenNthCalledWith(10, 9);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('loop5to10 - it logs from 5 (inclusive) to 10 (inclusive) by 1', () => {
    loop5to10();
    expect(log).toHaveBeenCalledTimes(6);
    expect(log).toHaveBeenNthCalledWith(1, 5);
    expect(log).toHaveBeenNthCalledWith(2, 6);
    expect(log).toHaveBeenNthCalledWith(3, 7);
    expect(log).toHaveBeenNthCalledWith(4, 8);
    expect(log).toHaveBeenNthCalledWith(5, 9);
    expect(log).toHaveBeenNthCalledWith(6, 10);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('loopEvenNumbersUpTo10 - it logs from 0 (inclusive) to 10 (exclusive) by 2', () => {
    loopEvenNumbersUpTo10();
    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenNthCalledWith(1, 0);
    expect(log).toHaveBeenNthCalledWith(2, 2);
    expect(log).toHaveBeenNthCalledWith(3, 4);
    expect(log).toHaveBeenNthCalledWith(4, 6);
    expect(log).toHaveBeenNthCalledWith(5, 8);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('loopEvenNumbersUpTo10 - does not rely on an if check or continue keyword', () => {
    const textContent = loopEvenNumbersUpTo10.toString();
    expect(textContent).not.toMatch(/if/);
    expect(textContent).not.toMatch(/continue/);

    loopEvenNumbersUpTo10(); // repeated to keep test from auto-passing
    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenNthCalledWith(1, 0);
    expect(log).toHaveBeenNthCalledWith(2, 2);
    expect(log).toHaveBeenNthCalledWith(3, 4);
    expect(log).toHaveBeenNthCalledWith(4, 6);
    expect(log).toHaveBeenNthCalledWith(5, 8);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('countdown5to0 - it logs from 5 (inclusive) to 0 (inclusive) by -1', () => {
    countdown5to0();
    expect(log).toHaveBeenCalledTimes(6);
    expect(log).toHaveBeenNthCalledWith(1, 5);
    expect(log).toHaveBeenNthCalledWith(2, 4);
    expect(log).toHaveBeenNthCalledWith(3, 3);
    expect(log).toHaveBeenNthCalledWith(4, 2);
    expect(log).toHaveBeenNthCalledWith(5, 1);
    expect(log).toHaveBeenNthCalledWith(6, 0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('loopUpToNum - it logs from 0 (inclusive) to the given number (exclusive) by 1', () => {
    loopUpToNum(5);
    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenNthCalledWith(1, 0);
    expect(log).toHaveBeenNthCalledWith(2, 1);
    expect(log).toHaveBeenNthCalledWith(3, 2);
    expect(log).toHaveBeenNthCalledWith(4, 3);
    expect(log).toHaveBeenNthCalledWith(5, 4);
    jest.clearAllMocks();

    loopUpToNum(3);
    expect(log).toHaveBeenCalledTimes(3);
    expect(log).toHaveBeenNthCalledWith(1, 0);
    expect(log).toHaveBeenNthCalledWith(2, 1);
    expect(log).toHaveBeenNthCalledWith(3, 2);
    jest.clearAllMocks();

    loopUpToNum(0);
    expect(log).toHaveBeenCalledTimes(0);
    jest.clearAllMocks();

    loopUpToNum(-1);
    expect(log).toHaveBeenCalledTimes(0);
    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('fizzbuzz - it logs fizz, buzz, fizzbuzz, or the number correctly', () => {
    fizzbuzz();
    expect(log).toHaveBeenCalledTimes(100);

    expect(log).toHaveBeenNthCalledWith(1, 1);
    expect(log).toHaveBeenNthCalledWith(2, 2);
    expect(log).toHaveBeenNthCalledWith(3, 'fizz');
    expect(log).toHaveBeenNthCalledWith(4, 4);
    expect(log).toHaveBeenNthCalledWith(5, 'buzz');
    expect(log).toHaveBeenNthCalledWith(6, 'fizz');
    expect(log).toHaveBeenNthCalledWith(7, 7);
    expect(log).toHaveBeenNthCalledWith(8, 8);
    expect(log).toHaveBeenNthCalledWith(9, 'fizz');
    expect(log).toHaveBeenNthCalledWith(10, 'buzz');
    expect(log).toHaveBeenNthCalledWith(11, 11);
    expect(log).toHaveBeenNthCalledWith(12, 'fizz');
    expect(log).toHaveBeenNthCalledWith(13, 13);
    expect(log).toHaveBeenNthCalledWith(14, 14);
    expect(log).toHaveBeenNthCalledWith(15, 'fizzbuzz');
    expect(log).toHaveBeenNthCalledWith(16, 16);

    expect(log).toHaveBeenNthCalledWith(30, 'fizzbuzz');
    expect(log).toHaveBeenNthCalledWith(45, 'fizzbuzz');
    expect(log).toHaveBeenNthCalledWith(60, 'fizzbuzz');
    expect(log).toHaveBeenNthCalledWith(75, 'fizzbuzz');
    expect(log).toHaveBeenNthCalledWith(90, 'fizzbuzz');

    expect(log).toHaveBeenNthCalledWith(97, 97);
    expect(log).toHaveBeenNthCalledWith(49, 49);
    expect(log).toHaveBeenNthCalledWith(83, 83);

    expect(log).toHaveBeenNthCalledWith(18, 'fizz');
    expect(log).toHaveBeenNthCalledWith(33, 'fizz');

    expect(log).toHaveBeenNthCalledWith(40, 'buzz');
    expect(log).toHaveBeenNthCalledWith(50, 'buzz');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
