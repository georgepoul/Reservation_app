import {createSlice} from "@reduxjs/toolkit";
import Reservation from "../../components/models/reservation";

const ReservationState: {reservation: Reservation, allReservations: Reservation[]} = {
    reservation: new Reservation('','','','','',''),
    allReservations: [],
};


const ReservationSlice = createSlice({
    name: 'save',
    initialState: ReservationState,
    reducers: {
        saveReservation(state, action) {

            state.allReservations.push({
                name:action.payload.name,
                from: action.payload.from,
                to: action.payload.to,
                address: action.payload.address,
                room:action.payload.room,
                id: action.payload.id
            })

        },
        saveSingleReservation(state, action){
            state.reservation = action.payload;
        }
    }
})

export const reservationActions = ReservationSlice.actions;
export default ReservationSlice.reducer;
