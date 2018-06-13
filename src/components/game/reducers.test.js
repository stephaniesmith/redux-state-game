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

  const testRoundState = (selections, expected) => {
    expect(getRoundState({ selections })).toBe(expected);
  };

  it('gets playing round state', () => {
    testRoundState([' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '], ROUND_STATE.PLAYING);
  });

  // it('gets playing round state', () => {
  //   const state = selections([' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '], { type: SELECTION, payload: { index: 2, player: 'O' } });
  //   expect(getRoundState(state)).toEqual(ROUND_STATE.PLAYING);
  // });
  // it('gets win round state condition1', () => {
  //   const state = selections(['X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' '], { type: SELECTION, payload: { index: 2, player: 'O' } });
  //   expect(getRoundState(state)).toEqual(ROUND_STATE.PLAYING);
  // });

  // it('gets win round state condition2', () => {
  //   const state = selections(['O', 'O', 'X', 'X', 'X', 'X', ' ', ' ', ' '], { type: SELECTION, payload: { index: 2, player: 'O' } });
  //   expect(getRoundState(state)).toEqual(ROUND_STATE.PLAYING);
  // });


});
