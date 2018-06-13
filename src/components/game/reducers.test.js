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

  it('gets winning round state condition 1', () => {
    testRoundState(['X', 'X', 'X', 'O', ' ', ' ', ' ', ' ', ' '], ROUND_STATE.WIN);
  });

  // it('gets winning round state condition 2', () => {
  //   testRoundState([' ', 'O', 'O', 'X', ' ', ' ', ' ', ' ', ' '], ROUND_STATE.PLAYING);
  // });
  


});
