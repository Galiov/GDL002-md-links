const mdLinks = require('../index.js');

describe('mdLinks', ()=>{
	it('should be an object', () => {
		expect(typeof mdLinks).toBe('object');
	});

});

describe('pathIsAbsolute', () => {

  it('should be a function', () => {
  //  console.log('FIX ME!');
    expect(typeof mdLinks.pathIsAbsolute).toBe('function');
  });

it('should be a boolean', () => {
  	expect(typeof mdLinks.pathIsAbsolute()).toBe("boolean");
  });


});
