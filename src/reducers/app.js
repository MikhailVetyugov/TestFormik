import * as actions from 'actions/actions';

const initialState = {}

export default function app(state = initialState, action) {
  switch (action.type) {
    case actions.ACTION_EXAMPLE:
      return state;
    default:
      return state;
  }
}
