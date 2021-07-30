// action types
 const API_CALL_REQUEST = "API_CALL_REQUEST";
 const API_CALL_SUCCESS = "API_CALL_SUCCESS";
 const API_CALL_FAILURE = "API_CALL_FAILURE";

 // reducer with initial state
 const initialState = {
   fetching: false,
   category: null,
   error: null
 };

 export function reducer(state = initialState, action) {
   switch (action.type) {
     case API_CALL_REQUEST:
       return { ...state, fetching: true, error: null };
     case API_CALL_SUCCESS:
       return { ...state, fetching: false, category: action.data };
     case API_CALL_FAILURE:
       return { ...state, fetching: false, category: null, error: action.error };
     default:
       return state;
   }
 }


 const API_CALL_REQUEST1 = "API_CALL_REQUEST1";
 const API_CALL_SUCCESS1 = "API_CALL_SUCCESS1";
 const API_CALL_FAILURE1 = "API_CALL_FAILURE1";

 // reducer with initial state
 const initialState1 = {
   fetching: false,
   category1: null,
   error: null
 };

 export function reducer1(state = initialState1, action) {
   switch (action.type) {
     case API_CALL_REQUEST1:
       return { ...state, fetching: true, error: null };
     case API_CALL_SUCCESS1:
       return { ...state, fetching: false, category1: action.data };
     case API_CALL_FAILURE1:
       return { ...state, fetching: false, category1: null, error: action.error };
     default:
       return state;
   }
 }




 ///home
 const API_CALL_HOMEPAGE = "API_CALL_HOMEPAGE";
 const API_CALL_SUCCESS_HOMEPAGE = "API_CALL_SUCCESS_HOMEPAGE";
 const API_CALL_FAILURE_HOMEPAGE= "API_CALL_FAILURE_HOMEPAGE";

 // reducer with initial state
 const initialStateHome = {
   fetching: false,
   homepage: null,
   error: null
 };

 export function Homepage(state = initialStateHome, action) {
   switch (action.type) {
     case API_CALL_HOMEPAGE:
       return { ...state, fetching: true, error: null };
     case API_CALL_SUCCESS_HOMEPAGE:
       return { ...state, fetching: false, homepage: action.data };
     case API_CALL_FAILURE_HOMEPAGE:
       return { ...state, fetching: false, homepage: null, error: action.error };
     default:
       return state;
   }
 }


  ///products
 const API_CALL_PRODUCTS = "API_CALL_PRODUCTS";
 const API_CALL_SUCCESS_PRODUCTSE = "API_CALL_SUCCESS_PRODUCTS";
 const API_CALL_FAILURE_PRODUCTS= "API_CALL_FAILURE_PRODUCTS";

 // reducer with initial state
 const initialStatePRODUCTS = {
   fetching: false,
   products: null,
   error: null
 };

 export function Products(state = initialStatePRODUCTS, action) {
   switch (action.type) {
     case API_CALL_PRODUCTS:
       return { ...state, fetching: true, error: null };
     case API_CALL_SUCCESS_PRODUCTSE:
       return { ...state, fetching: false, products: action.data };
     case API_CALL_FAILURE_PRODUCTS:
       return { ...state, fetching: false, products: null, error: action.error };
     default:
       return state;
   }
 }