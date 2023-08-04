import  reservationStoreReducer from './ReservationStore'
import {configureStore} from "@reduxjs/toolkit";

const  store = configureStore({
    reducer: {reservation: reservationStoreReducer}
})

export default store;
