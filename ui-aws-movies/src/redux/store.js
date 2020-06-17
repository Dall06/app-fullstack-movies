import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const storeEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return {
    ...createStore(reducers, storeEnhancers),
    runSaga: sagaMiddleware.run(sagas),
  };
};

export default configureStore;
