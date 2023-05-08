const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const { brokenLoop, brokenNested } = require('./debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('brokenLoop - it logs from the start number (inclusive) to the end number (inclusive) by 1', () => {
    const expectedRes1 = '12345678910';
    const actual1 = brokenLoop(1, 10);
    expect(actual1).toEqual(expectedRes1);

    const expectedRes2 = '56789101112';
    const actual2 = brokenLoop(5, 12);
    expect(actual2).toEqual(expectedRes2);

    const expectedRes3 = '0';
    const actual3 = brokenLoop(0, 0);
    expect(actual3).toEqual(expectedRes3);

    const expectedRes4 = '';
    const actual4 = brokenLoop(0, -1);
    expect(actual4).toEqual(expectedRes4);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('brokenNested - it logs a string of numbers from 00 to 19', () => {
    const expectedRes = '00-01-02-03-04-05-06-07-08-09-10-11-12-13-14-15-16-17-18-19';
    const actual = brokenNested();
    expect(actual).toEqual(expectedRes);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
