export const SELECTION = 'SELECTION';
// export const NEW_ROUND = 'NEW_ROUND';

// export const ROUND_STATE = {
//   PLAYING: 'PLAYING',
//   WIN: 'WIN',
//   LOSE: 'LOSE',
//   TIE: 'TIE'
// };

export const getBoard = state => state.selections;


const initBoard = () => [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
export function selections(state = initBoard(), { type, payload }) {
  console.log('here');
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