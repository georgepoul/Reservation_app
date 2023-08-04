import React, {useState} from 'react';
import Text from "../FormComp/text";
import Select from '../FormComp/select'

import Card from '../ui/Card';
import classes from './NewReservationForm.module.css';
import Alert from "../ui/Alert";
import {v4} from "uuid";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Reservation from "../models/reservation";


const NewReservationForm: React.FC<{
    onAddReservation: (data: Reservation) => Promise<void>,
}> = (props) => {
    const [name, setName] = useState<string>('');
    const [from, setFrom] = useState<Date>(new Date());
    const [to, setTo] = useState<Date>(new Date());
    const [address, setAddress] = useState<string>('');
    const [room, setRoom] = useState<string>('100');
    const [error, setError] = useState<string>('');


    function validateDateRange(fromDate: Date, toDate: Date) {
        const fromDateTime = new Date(fromDate).getTime();
        const toDateTime = new Date(toDate).getTime();

        if (fromDateTime > toDateTime) {
            setError('The "To" date must be greater than the "From" date.');
            return false;
        }

        return true;
    }

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!validateDateRange(from, to)) {
            return;
        }


        const data = {
            name,
            from: from.toUTCString().split(',')[1].trim().slice(0, 11),
            to: to.toUTCString().split(',')[1].trim().slice(0, 11),
            address,
            room,
            id: v4()
        };
        props.onAddReservation(data);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Card>
                <form className={classes.form} onSubmit={submitHandler} data-testid={'form'}>
                    {error && <Alert type="error" message={error}/>}
                    <div className={classes.control}>
                        <label htmlFor='title'>Name</label>
                        <Text id='title' data={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='from'>From</label>
                        <DatePicker
                            value={from}
                            onChange={(date: Date | null) => setFrom(date!)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='to'>To</label>
                        <DatePicker
                            value={to}
                            onChange={(date: Date | null) => setTo(date!)}
                        />
                    </div>
                    {error && <p className={classes.control}></p>} {/* Display the error message if validation fails */}
                    <div className={classes.control}>
                        <label htmlFor='address'>Address</label>
                        <Text id='address' data={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='roomSelect'>Room</label>
                        <Select id="roomSelect" onChange={(e) => setRoom(e.target.value)} value={room} label={'kati'}/>
                    </div>
                    <div className={classes.actions}>
                        <button type='submit'>Add Reservation</button>
                    </div>
                </form>
            </Card>
        </LocalizationProvider>
    );
}

export default NewReservationForm;
