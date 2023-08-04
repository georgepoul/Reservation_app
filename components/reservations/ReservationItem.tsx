import Card from '../ui/Card';
import classes from './ReservationItem.module.css';
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {reservationActions} from "../../pages/store/ReservationStore";
import React from "react";
import Reservation from "../models/reservation";

const ReservationItem: React.FC<{reservation: Reservation, key: string, image: string}> = (props) => {

  const rooter = useRouter();
  const dispatch = useDispatch();
  async function showDetailsHandler() {
      await dispatch(reservationActions.saveSingleReservation(props.reservation))
      rooter.push('/reservationId');
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.reservation.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.reservation.name}</h3>
          <address data-testid='address'>{props.reservation.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ReservationItem;
