import NewReservationForm from "../components/reservations/NewReservationForm";
import {useRouter} from "next/router";
import {useDispatch} from 'react-redux'
import {reservationActions} from "./store/ReservationStore";
import Reservation from "../components/models/reservation";

function NewReservation() {
    const router = useRouter();
    const dispatch = useDispatch();

    async function addReservationHandler(data: Reservation): Promise<void> {
        dispatch(reservationActions.saveReservation(data));
        await router.push('/')
    }

    return (
        <NewReservationForm onAddReservation={addReservationHandler}/>
    );
}


export default NewReservation;
