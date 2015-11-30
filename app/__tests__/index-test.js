jest.dontMock('../src');
jest.autoMockOff();
const deepFreeze = require('deep-freeze');
const store = require('../src/index.js');
describe('counter tests', () => {
    it('should work well in case of combine reducers', () => {
        console.log(store.getState());
        store.dispatch({
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn redux'
        });
        console.log(store.getState());
        store.dispatch({
            type: 'ADD_TODO',
            id: 1,
            text: 'Go Shopping'
        });
        console.log(store.getState());
        store.dispatch({
            type: 'TOGGLE_TODO',
            id: 0
        });
        console.log(store.getState());
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        });
        console.log(store.getState());

    })
});