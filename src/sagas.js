import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from 'actions/actions';

function* initializeApp() {
}

export default function* rootSaga() {
  yield takeLatest(actions.ACTION_EXAMPLE, initializeApp);
}