import classes from './MainNavigation.module.css';
import Link from "next/link";
import React from "react";


const MainNavigation: React.FC = () =>{

    return (
        <header className={classes.header}>
            <a href='/'>
                <div className={classes.logo}>React Reservation</div>
            </a>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Reservations</Link>
                    </li>
                    <li>
                        <Link href='/RoomWithReservations'>Rooms with reservation</Link>
                    </li>
                    <li>
                        <Link href='/NewReservation'>Add New Reservation</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
