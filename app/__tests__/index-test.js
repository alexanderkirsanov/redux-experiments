jest.dontMock('../src');
const deepFreeze = require('deep-freeze');
const todos = require('../src/index.js');
describe('counter tests', () => {

    it('test freezed reducer', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'learn redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'learn redux',
                completed: false
            }
        ];
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
});