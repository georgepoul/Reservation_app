import React from "react";

import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import {TextEncoder} from 'util';
import {mocked} from "jest-mock";
import ReservationId from "../../pages/reservationId";
import ReservationDetail from "../../components/reservations/ReservationDetail";

Object.defineProperty(window, 'TextEncoder', {
    writable: true,
    value: TextEncoder,
});

jest.mock('../../components/reservations/ReservationDetail', () => {
    const React = require('react');
    return {
        __esModule: true,
        default: jest.fn(() => <div>Table</div>)
    }
});

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

const ReservationDetailsMocked = mocked(ReservationDetail)

describe('Components Tests', () => {

    beforeEach(() => {
        ReservationDetailsMocked.mockClear();
    })

    test('ReservationItem component Test: newReservation implements newReservationForm', async () => {
        render(
            <ReservationId/>
        );

        expect(ReservationDetailsMocked).toBeCalledTimes(1)
    });
});
