jest.dontMock('../src');
const counter = require('../src/index.js');
describe('counter tests', () => {
   it('should be defined',()  => {
       expect(counter).toBeDefined();
   })
});