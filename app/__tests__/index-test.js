jest.dontMock('../src');
jest.autoMockOff();
const deepFreeze = require('deep-freeze');
const store = require('../src/index.js');
describe('counter tests', () => {
    it('should work well in case of combine reducers', () => {
        console.log(store.getState());
    })
});