const assert = require('assert');

const ChangeTypes = require('../lib/ChangeTypes');
const solveEquation = require('../lib/solveEquation');

const NO_STEPS = 'no-steps';

function testSolve(equationString, outputStr, debug=false) {
  const steps = solveEquation(equationString, debug);
  let lastStep;
  if (steps.length === 0) {
    lastStep = NO_STEPS;
  }
  else {
    lastStep = steps[steps.length -1].newEquation.ascii();
  }

  for(var i = 0; i< steps.length; i++) {
    console.log(steps[i].newEquation.ascii())
  }
  it(equationString + ' -> ' + outputStr, (done) => {
    assert.equal(lastStep, outputStr);
    done();
  });
}

describe('alpha', function () {
  const tests = [
    ['3x^2 - 7x + 3 = 0', 'x = [-1, -2]'],
  ];
  tests.forEach(t => testSolve(t[0], t[1], t[2]));
});