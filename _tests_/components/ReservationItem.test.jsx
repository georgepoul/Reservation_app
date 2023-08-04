import React from "react";
import {fireEvent, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Reservation from "../../components/models/reservation";
import ReservationItem from "../../components/reservations/ReservationItem";
import { renderWithProviders } from "../utils/utils-for-tests";
import { TextEncoder } from 'util';
import {reservationActions} from "../../pages/store/ReservationStore";

Object.defineProperty(window, 'TextEncoder', {
    writable: true,
    value: TextEncoder,
});

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

let reservation1 = new Reservation("George", "10 Aug 2023", "15 Aug 2023", "some address 1", '100', '1');

describe('Components Tests', () => {
    test('ReservationItem component Test: img', async () => {
        renderWithProviders(
            <ReservationItem
                reservation={reservation1}
                key={reservation1.id}
                image="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp"
            />
        );
        const image = await screen.findByRole('img', { hidden: false });
        expect(image).toBeVisible();
    });

    test('ReservationItem component Test: Header', async () => {
        renderWithProviders(
            <ReservationItem
                reservation={reservation1}
                key={reservation1.id}
                image="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp"
            />
        );
        const header = await screen.findByRole('heading', { hidden: false });
        expect(header).toHaveTextContent('George');
    });

    test('ReservationItem component Test: Address', async () => {
        renderWithProviders(
            <ReservationItem
                reservation={reservation1}
                key={reservation1.id}
                image="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp"
            />
        );
        const header = await screen.getByText(/some address 1/i);
        expect(header).toBeInTheDocument();
    });

    test('ReservationItem component Test: dispatch', async () => {
        renderWithProviders(
            <ReservationItem
                reservation={reservation1}
                key={reservation1.id}
                image="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_2048x1331_desktop_2.webp"
            />
        );
        const button = screen.getByRole('button', { name: 'Show Details' });
        fireEvent.click(button);

        expect(mockDispatch).toHaveBeenCalledWith(reservationActions.saveSingleReservation(reservation1));
    });
});
