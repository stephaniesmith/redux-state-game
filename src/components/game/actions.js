import {
  SELECTION, 
  TURN
} from './reducers';

export const makeSelection = (index, player) => {
  return (dispatch) => {
    dispatch({
      type: SELECTION,
      payload: { index: index, player: player }
    });

    dispatch({
      type: TURN
    });
  };


};