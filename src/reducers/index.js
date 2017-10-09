import { LOAD_HOLDINGS, CLEAR_HOLDINGS } from '../actions/index';

const holdings = [
  {
    id: 1,
    symbol: 'CSCO',
    shares: 100,
    buyPrice: 32.0,
    commission: 4.95
  },
  {
    id: 2,
    symbol: 'ANET',
    shares: 100,
    buyPrice: 192.0,
    commission: 4.95
  }
];

const initialState = {
  items: []
};

export function holdingsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOLDINGS:
      return {
        items: holdings.slice()
      };
    case CLEAR_HOLDINGS:
      return {
        items: []
      };
    default:
      return state;
  }
}

export default holdingsReducer;
