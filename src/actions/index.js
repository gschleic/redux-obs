export const LOAD_HOLDINGS = 'LOAD_HOLDINGS';
export const CLEAR_HOLDINGS = 'CLEAR_HOLDINGS';

export function loadHoldings() {
  return {
    type: LOAD_HOLDINGS
  };
}
export function clearHoldings() {
  return {
    type: CLEAR_HOLDINGS
  };
}
