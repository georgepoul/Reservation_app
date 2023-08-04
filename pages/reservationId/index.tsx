import ReservationDetail from "../../components/reservations/ReservationDetail";
import {useSelector} from "react-redux";
import {rootReducer} from "@reduxjs/toolkit/src/tests/injectableCombineReducers.example";
import Reservation from "../../components/models/reservation";
import reservation from "../../components/models/reservation";

function ReservationDetails({  }) {
    const reservationData: Reservation = useSelector((state: ReturnType<typeof rootReducer>)=> state.reservation.reservation);
    return (
        <ReservationDetail reservation={reservationData}
        />
    );
}
export default ReservationDetails;
