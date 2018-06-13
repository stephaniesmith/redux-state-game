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
  
  const board = getBoard(state);
  const [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8] = board;

  console.log(sq0);

  // const getWins = (numOne, numTwo, numThree) => board.filter((square, index) => square.index === numOne || square.index === numTwo || square.index === numThree);

  const winOne = [sq0, sq1, sq2];
  console.log('WINONE', winOne);
  const winTwo = [sq3, sq4, sq5];
  const winThree = [sq6, sq7, sq8];

  const winFour = [sq0, sq3, sq6];
  const winFive =  [sq1, sq4, sq7];
  const winSix =  [sq2, sq5, sq8];

  const winSeven =  [sq0, sq4, sq8];
  const winEight =  [sq2, sq4, sq6];

  const winX = ['X', 'X', 'X'];
  const winO = ['O', 'O', 'O'];

  const compare = (arr) => (winX === arr || winO === arr) ? true : false;

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