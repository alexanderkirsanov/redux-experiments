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
    it('test toggle todo reducer', () => {
        const stateBefore = [{
            id: 0,
            text: 'learn redux',
            completed: false
        }, {
            id: 1,
            text: 'go shopping',
            completed: false
        }];
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const stateAfter = [{
            id: 0,
            text: 'learn redux',
            completed: false
        }, {
            id: 1,
            text: 'go shopping',
            completed: true
        }];
        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
});