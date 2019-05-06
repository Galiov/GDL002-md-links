
const mdLinks = require('../index.js');

describe('pathIsAbsolute', () => {

  it('should be a function', () => {
  //  console.log('FIX ME!');
    expect(typeof mdLinks.pathIsAbsolute).toBe('function');
  });
});

describe('linksExtractor', () => {

it('should be a function', () => {
  	expect(typeof mdLinks.linksExtractor).toBe('function');
  });
it('should return an array', () => {
	expect(mdLinks.linksExtractor()).toEqual([]);
})

});
