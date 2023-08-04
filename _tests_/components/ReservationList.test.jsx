import React from "react";

import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import {TextEncoder} from 'util';
import Reservation from "../../components/models/reservation";
import {mocked} from "jest-mock";
import ReservationList from "../../components/reservations/ReservationList";
import ReservationItem from "../../components/reservations/ReservationItem";
import {useSelector} from "react-redux";

Object.defineProperty(window, 'TextEncoder', {
    writable: true,
    value: TextEncoder,
});

let reservation1 = new Reservation("George", "10 Aug 2023", "15 Aug 2023", "some address 1", '100', '1');
let reservation2 = new Reservation("Stefanos", "10 Aug 2023", "15 Aug 2023", "some address 2", '101', '2');
let reservations = [reservation1, reservation2];

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

const pushMock = jest.fn()

jest.mock("next/router", () => ({
    useRouter: () => ({
        query: {},
        push: pushMock,
    }),
}));

jest.mock('../../components/reservations/ReservationItem', () => {
    const React = require('react');
    return {
        __esModule: true,
        default: jest.fn(() => <div>Table</div>)
    }
});

const ReservationItemMocked = mocked(ReservationItem)



describe('Components Tests', () => {

    beforeEach(() => {
        ReservationItemMocked.mockClear();
    })

    test('ReservationList page Test: RoomReservation displayed', async () => {

        useSelector.mockReturnValue(reservations);

        render(
            <ReservationList/>
        );
        expect(ReservationItemMocked).toBeCalledTimes(2)

    });
});
