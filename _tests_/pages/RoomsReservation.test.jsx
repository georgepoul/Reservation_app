import React from "react";

import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {TextEncoder} from 'util';
import Reservation from "../../components/models/reservation";
import {useSelector} from "react-redux";
import RoomWithReservations from "../../pages/RoomWithReservations";
import user from "@testing-library/user-event";

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

describe('Components Tests', () => {

    test('RoomReservation page Test: RoomReservation displayed', async () => {

        useSelector.mockReturnValue(reservations);

        render(
            <RoomWithReservations/>
        );

        const rooms = screen.getAllByRole('heading', {hidden:false})
        expect(rooms).toHaveLength(2)
        expect(rooms[0]).toHaveTextContent('100')
        expect(rooms[1]).toHaveTextContent('101')
    });

    test('RoomReservation page Test: RoomReservation add room', async () => {

        useSelector.mockReturnValue(reservations);

        render(
            <RoomWithReservations/>
        );

        const buttons = screen.getAllByRole('button', {hidden:false});
        await user.click(buttons[0]);

        const buttonsAfter = screen.getAllByRole('button', {hidden:false});
        expect(buttons[0]).toHaveTextContent('Remove Room');
        expect(buttons[1]).toHaveTextContent('Add Room');

    });

    test('RoomReservation page Test: RoomReservation remove rooms', async () => {

        useSelector.mockReturnValue(reservations);

        render(
            <RoomWithReservations/>
        );

        const buttons = screen.getAllByRole('button', {hidden:false});
        await user.click(buttons[0]);
        await user.click(buttons[1]);
        await user.click(buttons[1]);

        const buttonsAfter = screen.getAllByRole('button', {hidden:false});
        expect(buttons[0]).toHaveTextContent('Remove Room');
        expect(buttons[1]).toHaveTextContent('Add Room');

    });


});
