import { makeSelection } from './actions';
import { SELECTION } from './reducers';

describe('makeSelection action', () => {
  it('dispatches player choice', () => {
    const thunk = makeSelection(3, 'X');
    const dispatch = jest.fn();
    const getState = () => ({ selections: [' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '] });
    thunk(dispatch, getState);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(2);

    expect(calls[0][0]).toEqual({
      type: SELECTION,
      payload: { index: 3, player: 'X' }
    });

  });


});