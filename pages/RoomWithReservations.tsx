import React, {useState} from "react";
import Card from "../components/ui/Card";
import classes from '../components/reservations/ReservationItem.module.css';
import { useRouter } from "next/router";
import {useSelector} from "react-redux";
import {rootReducer} from "@reduxjs/toolkit/src/tests/injectableCombineReducers.example";
import Reservation from "../components/models/reservation";

function RoomsReservation() {
    const router = useRouter();
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const reservations : Reservation[] = useSelector((state: ReturnType <typeof rootReducer>) => state.reservation.allReservations);

    let rooms:{ room: string }[] = []
    if (reservations.length>0) {
        rooms = reservations.map((reservation) => ({
            room: reservation.room,
        }))
    }
    function handleAddRoom(room: string): void {
        setSelectedRooms((prevSelectedRooms:string[]) => {
            const roomIndex: number = prevSelectedRooms.indexOf(room);
            if (roomIndex === -1) {
                // Room is not in the selectedRooms list, so add it
                return [...prevSelectedRooms, room];
            } else {
                // Room is already in the selectedRooms list, so remove it
                return prevSelectedRooms.filter((r: string) => r !== room) as string[];
            }
        });
    }

    function isRoomSelected(room:string) {
        return selectedRooms.includes(room);
    }

    function submitHandler(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const selectedRoomsString = selectedRooms.join(",");
        router.push({
            pathname: "/SelectedRooms",
            query: { rooms: selectedRoomsString },
        });

        setSelectedRooms([]);
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={classes.content}>
                    {rooms.map((room, index) => (
                        <div key={index} className={`${classes.item} ${isRoomSelected(room.room) ? classes.selected : ""}`}>
                            <Card>
                                <div className={classes.image}>
                                    <img src="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp" alt={room.room} />
                                </div>
                                <div className={classes.content}>
                                    <h3>Room: {room.room}</h3>
                                </div>
                                <div className={classes.actions}>
                                    <button type="button" onClick={() => handleAddRoom(room.room)}>
                                        {isRoomSelected(room.room) ? "Remove Room" : "Add Room"}
                                    </button>
                                </div>
                            </Card>
                        </div>
                    ))}
                    <div className={classes.actions}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </Card>
    );
}
export default RoomsReservation;
