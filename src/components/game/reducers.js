export const SELECTION = 'SELECTION';
export const TURN = 'TURN';
export const NEW_ROUND = 'NEW_ROUND';

export const ROUND_STATE = {
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  TIE: 'TIE'
};
export const getBoard = state => state.selections;
export const getPlayer = state => state.turn;
export const getRoundState = state => {
  
  const board = !state.selections ? state : getBoard(state);

  const getWins = (numOne, numTwo, numThree) => board.filter(square => square.index === numOne || square.index === numTwo || square.index === numThree);

  const winOne = getWins(0, 1, 2);
  const winTwo = getWins(3, 4, 5);
  const winThree = getWins(6, 7, 8);

  const winFour = getWins(0, 3, 6);
  const winFive =  getWins(1, 4, 7);
  const winSix =  getWins(2, 5, 8);

  const winSeven =  getWins(0, 4, 8);
  const winEight =  getWins(2, 4, 6);

  const winX = ['X', 'X', 'X'];
  const winO = ['O', 'O', 'O'];

  const compare = (arr) => winX === arr || winO === arr ? true : false;

  if(compare(winOne) || compare(winTwo)
  || compare(winThree) || compare(winFour)
  || compare(winFive) || compare(winSix)
  || compare(winSeven) || compare(winEight)) return ROUND_STATE.WIN;

  if(board.includes(' ')) return ROUND_STATE.PLAYING;

  return ROUND_STATE.TIE;
};

const initBoard = () => [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const initPlayer = () => 'X';

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
  switch (type) {
    case TURN: {
      const copy = state;
      return copy === 'X' ? 'O' : 'X';
    }
    default:
      return state;
  }
}