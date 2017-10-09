import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

function loadHoldingsEpic(actions$) {
  return actions$.do(action => console.log(action)).ignoreElements();
}

export const rootEpic = combineEpics(loadHoldingsEpic);
