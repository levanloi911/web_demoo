import {
    configureStore
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { Homepage, Products, reducer, reducer1 } from '../reducers';
import   watcherSaga  from './rootSaga';
 const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        category: reducer,
        category1: reducer1,
        home: Homepage,
        product: Products,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(watcherSaga)

