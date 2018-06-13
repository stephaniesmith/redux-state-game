import {
  selections, SELECTION, getRoundState, ROUND_STATE
} from './reducers';

describe('selections reducer', () => {
  it('has empty array for initial state', () => {
    const state = selections(undefined, {});
    expect(state).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  it('records a selection', () => {
    const state = selections(undefined, { type: SELECTION, payload: { index: 3, player: 'X' } });
    expect(state).toEqual([' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ']);
  });
});

describe('round_state selectors', () => {

  it('gets playing round state', () => {
    const state = selections([' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '], { type: SELECTION, payload: { index: 2, player: 'O' } });
    expect(getRoundState(state)).toEqual(ROUND_STATE.PLAYING);
  });


});
