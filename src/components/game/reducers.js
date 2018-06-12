export const SELECTION = 'SELECTION';
// export const NEW_ROUND = 'NEW_ROUND';

// export const ROUND_STATE = {
//   PLAYING: 'PLAYING',
//   WIN: 'WIN',
//   LOSE: 'LOSE',
//   TIE: 'TIE'
// };

const initSelections = () => [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
export function selections(state = initSelections(), { type, payload }) {
  switch (type) {
    case SELECTION: {
      const copy = [...state];
      copy[payload.index] = payload.player;
      return copy;
    }
    default:
      return state;
  }
}