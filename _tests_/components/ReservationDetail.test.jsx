import React from "react";
import {screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Reservation from "../../components/models/reservation";
import {renderWithProviders} from "../utils/utils-for-tests";
import ReservationDetail from "../../components/reservations/ReservationDetail";

let reservation1 = new Reservation("George", "10 Aug 2023", "15 Aug 2023", "some address 1", '100', '1');


describe('Components Tests', () => {

    test('ReservationDetails component Test: heading', async () => {
        renderWithProviders(
            <ReservationDetail
                reservation={reservation1}
            />
        );
        const header = await screen.findByRole('heading', {hidden: false});
        expect(header).toHaveTextContent('George');
    });

    test('ReservationDetails component Test: paragraphs', async () => {
        renderWithProviders(
            <ReservationDetail
                reservation={reservation1}
            />
        );

        const room =  screen.getByText(/100/i);
        expect(room).toBeInTheDocument();
        const from =  screen.getByText(/10 Aug 2023/i);
        expect(from).toBeInTheDocument();
        const to =  screen.getByText(/15 Aug 2023/i);
        expect(to).toBeInTheDocument();

    });

    test('ReservationDetails component Test: address', async () => {
        renderWithProviders(
            <ReservationDetail
                reservation={reservation1}
            />
        );

        const address =  screen.getByText(/some address 1/i);
        expect(address).toBeInTheDocument();

    });
});
