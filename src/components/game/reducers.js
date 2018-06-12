export const SELECTION = 'SELECTION';
export const TURN = 'TURN';
// export const NEW_ROUND = 'NEW_ROUND';

// export const ROUND_STATE = {
//   PLAYING: 'PLAYING',
//   WIN: 'WIN',
//   LOSE: 'LOSE',
//   TIE: 'TIE'
// };

export const getBoard = state => state.selections;
export const getPlayer = state => state.turn;

const initBoard = () => [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const initPlayer = () => 'X';
// const initGame = () => {
//   return {
//     board: initBoard(),
//     player: initPlayer()
//   };
// };
export function selections(state = initBoard(), { type, payload }) {
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

export function turn(state = initPlayer(), { type }) {
  console.log('state', state);
  switch (type) {
    case TURN: {
      const copy = state;
      return copy === 'X' ? 'O' : 'X';
    }
    default:
      return state;
  }
}