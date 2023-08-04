
import ReservationItem from '../reservations/ReservationItem';
import classes from '../reservations/ReservationList.module.css';
import React from "react";
import Reservation from "../models/reservation";

const RoomReservationList: React.FC<{reservations: Reservation[] }> = (props) => {
    let result = null;
    if (props.reservations && props.reservations.length > 0) {
        result = (
            <ul className={classes.list}>
                {props.reservations.map((reservation) => (
                    <ReservationItem
                        key={ reservation.id}
                        reservation = {reservation}
                        image={'https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp'}
                    />
                ))}
            </ul>
        );
    } else {
        result = (
            <div style={{ textAlign: 'center' }}>
                <h1>Not Reservations</h1>
                <img src="https://www.shutterstock.com/image-vector/sad-apologizing-emoticon-emoji-holding-600w-1398672683.jpg" alt="Sad Emoticon" />
            </div>
        );
    }
    return result;
}

export default RoomReservationList;
