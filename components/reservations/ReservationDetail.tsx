import classes from './ReservationDetail.module.css'
import Reservation from "../models/reservation";
import React from "react";
const ReservationDetail: React.FC<{reservation: Reservation}> = (props) => {
    return (
        <section className={classes.detail}>
            <img src={'https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp'}
                 />
            <h1>{props.reservation.name}</h1>
            <address>{props.reservation.address}</address>
            <p>Room: {props.reservation.room}</p>
            <p>From: {props.reservation.from}</p>
            <p>To: {props.reservation.to}</p>
        </section>
    );
}

export default ReservationDetail;