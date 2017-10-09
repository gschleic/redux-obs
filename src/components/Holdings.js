import React from 'react';
import { connect } from 'react-redux';
import { loadHoldings, clearHoldings } from '../actions/index';

export function Holdings(props) {
  return (
    <div>
      <button type="button" onClick={props.loadHoldings}>
        LOAD
      </button>
      <button type="button" onClick={props.clearHoldings}>
        CLEAR
      </button>
      <HoldingsList {...props} />
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}

function HoldingsList(props) {
  if (props.items.length === 0) return null;
  return (
    <div>{props.items.map(item => <Holding {...item} key={item.id} />)}</div>
  );
}

function Holding(props) {
  return <p>{props.symbol}</p>;
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadHoldings: () => dispatch(loadHoldings()),
    clearHoldings: () => dispatch(clearHoldings())
  };
}

export default connect(mapState, mapDispatch)(Holdings);
