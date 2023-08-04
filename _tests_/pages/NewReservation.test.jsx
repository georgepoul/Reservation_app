import React from "react";

import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import {TextEncoder} from 'util';
import NewReservation from "../../pages/NewReservation";
import {mocked} from "jest-mock";
import NewReservationForm from "../../components/reservations/NewReservationForm";

Object.defineProperty(window, 'TextEncoder', {
    writable: true,
    value: TextEncoder,
});

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

jest.mock('../../components/reservations/NewReservationForm', () => {
    const React = require('react');
    return {
        __esModule: true,
        default: jest.fn(() => <div>Table</div>)
    }
});

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));

const NewReservationFormMocked = mocked(NewReservationForm)

describe('Pages Tests', () => {

    beforeEach(() => {
        NewReservationFormMocked.mockClear();
    })

    test('Reservation component Test: newReservation implements newReservationForm', async () => {
        render(
            <NewReservation/>
        );
        expect(NewReservationFormMocked).toBeCalledTimes(1)
    });
});
