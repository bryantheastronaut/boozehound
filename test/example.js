'use strict';

const expect = require('chai').expect;
// Testing suite. Tests can be added like so:

// 'describe' the overall name of the catagory with a function
// which calls the name of the specific test and a function that
// does whatever the test needs to do. Multiple 'it' tests can be added.
// Using the expect library: http://chaijs.com/guide/styles/#expect

describe('sanity test', () => {
  it('should not be a smouldering pile of mess', () => {
    expect(2+2).to.equal(4);
  });
  it('should try so hard and get so far', () => {
    let inTheEnd = 'it doesnt even matter';
    expect(inTheEnd).to.equal('it doesnt even matter');
  });
});
