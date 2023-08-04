import React from "react";

import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {TextEncoder} from 'util';
import Reservation from "../../components/models/reservation";
import {useSelector} from "react-redux";

import SelectedRooms from "../../pages/SelectedRooms";

Object.defineProperty(window, 'TextEncoder', {
    writable: true,
    value: TextEncoder,
});

let reservation1 = new Reservation("George", "10 Aug 2023", "15 Aug 2023", "some address 1", '100', '1');
let reservation2 = new Reservation("Stefanos", "10 Aug 2023", "15 Aug 2023", "some address 2", '101', '2');
let reservations = [reservation1, reservation2];

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(),
}));

const pushMock = jest.fn()


jest.mock("next/router", () => ({
    useRouter: () => ({
        query: {rooms:'100'},
        push: pushMock,
    }),
}));

describe('Components Tests', () => {

    test('RoomsReservation page Test: RoomsReservation displayed', async () => {

        useSelector.mockReturnValue(reservations);

        render(
            <SelectedRooms/>
        );

        const header=screen.getByRole('heading', {hidden:false})
        const address = screen.getByTestId('address', {hidden:false})
        expect(header).toHaveTextContent('George')
        expect(address).toHaveTextContent('some address 1')


    });
});
