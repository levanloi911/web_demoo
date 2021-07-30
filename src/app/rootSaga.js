 import { takeLatest, call, put } from "redux-saga/effects";
import Categorys from "../api/category";
import HomePage from "../api/homepage";
import Products from "../api/product";
import Profile from "../api/profile";

 // watcher saga: watches for actions dispatched to the store, starts worker saga
 export  default function* watcherSaga() {
   yield takeLatest("API_CALL_REQUEST", workerSaga,);
   yield takeLatest("API_CALL_REQUEST1", workerSaga1);
   yield takeLatest("API_CALL_HOMEPAGE", workerSagaHome);
   yield takeLatest("API_CALL_PRODUCTS", workerSagaproduct);


 }

 // function that makes the api request and returns a Promise for response
 function fetchCategory() {
   return Categorys.getAll();
 }

 // worker saga: makes the api call when watcher saga sees the action
 function* workerSaga() {
   try {
     const response = yield call(fetchCategory);
     const data = response.data;

     // dispatch a success action to the store with the new dog
     yield put({ type: "API_CALL_SUCCESS", data });

   } catch (error) {
     // dispatch a failure action to the store with the error
     yield put({ type: "API_CALL_FAILURE", error });
   }
 }


  function fetchProduct() {
   return Profile.getAll();
 }

 // worker saga: makes the api call when watcher saga sees the action
 function* workerSaga1() {
   try {
     const response = yield call(fetchProduct);
     const data = response.data;

     // dispatch a success action to the store with the new dog
     yield put({ type: "API_CALL_SUCCESS1", data });

   } catch (error) {
     // dispatch a failure action to the store with the error
     yield put({ type: "API_CALL_FAILURE1", error });
   }
 }




  function fetchHome() {
   return HomePage.getAll();
 }

 
 function* workerSagaHome() {
   try {
     const response = yield call(fetchHome);
     const data = response.data;

     
     yield put({ type: "API_CALL_SUCCESS_HOMEPAGE", data });

   } catch (error) {
    
     yield put({ type: "API_CALL_FAILURE_HOMEPAGE", error });
   }
 }





  
  function fetchproduct() {
   return Products.getAll();
 }

 
 function* workerSagaproduct() {
   try {
     const response = yield call(fetchproduct);
     const data = response.data;

     
     yield put({ type: "API_CALL_SUCCESS_PRODUCTS", data });

   } catch (error) {
    
     yield put({ type: "API_CALL_FAILURE_PRODUCTS", error });
   }
 }