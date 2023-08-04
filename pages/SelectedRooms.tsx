import { useRouter } from "next/router";
import RoomsReservationList from "../components/Rooms/RoomReservationList";
import {useSelector} from "react-redux";
import {rootReducer} from "@reduxjs/toolkit/src/tests/injectableCombineReducers.example";
import Reservation from "../components/models/reservation";

function RoomsReservation() {
    const router = useRouter();
    const rooms:string = router.query.rooms!.toString();
    const selectedRooms: string[] = rooms!.split(",");
    const reservations: Reservation[] = useSelector((state: ReturnType<typeof rootReducer>) => state.reservation.allReservations);

    const roomReservations= reservations.filter((reservation)=>
    selectedRooms.includes(reservation.room))

    return <RoomsReservationList reservations={roomReservations}/>
}
export default RoomsReservation;


