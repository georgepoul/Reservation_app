import React from "react";
import "@testing-library/jest-dom";
import NewReservationForm from "../../components/reservations/NewReservationForm";
import user from '@testing-library/user-event'
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

const mockDispatch = jest.fn();

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
}));


describe('Components Tests', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(
            <NewReservationForm onAddReservation={onSubmit}/>
        );
    })

    test('ReservationForm component Test: Form name', async () => {

        const name = inputChecker(/name/i);
        await user.type(name, 'George');

        fireEvent.submit(await screen.findByText(/add Reservation/i));

        expect(name).toHaveValue('George')
    })

    test('ReservationForm component Test: Form dates valid', async () => {
        const dates = screen.getAllByPlaceholderText("MM/DD/YYYY", { selector: 'input' });

        await userEvent.type(dates[0], '08/10/2023');
        await userEvent.type(dates[1], '08/15/2023');

        fireEvent.submit(await screen.findByText(/add Reservation/i));

        expect(dates[0].value).toEqual("08/10/2023");
        expect(dates[1].value).toEqual("08/15/2023");
    });

    test('ReservationForm component Test: Form dates invalid', async () => {
        const dates = screen.getAllByPlaceholderText("MM/DD/YYYY", { selector: 'input' });

        await userEvent.type(dates[0], '08/10/2023');
        await userEvent.type(dates[1], '08/09/2023');

        expect(dates[0].value).toEqual("08/10/2023");
        expect(dates[1].value).toEqual("08/09/2023");

        fireEvent.submit(await screen.findByText(/add Reservation/i));

        const error = await screen.getByText('The "To" date must be greater than the "From" date.')
        expect(error).toBeInTheDocument;
    });

    test('ReservationForm component Test: Form address', async () => {

        const address = inputChecker(/address/i)
        await user.type(address, "some address 1")

        fireEvent.submit(await screen.findByText(/add Reservation/i));

        expect(address).toHaveValue("some address 1")
    });

});


function inputChecker(id) {
    const input = screen.getByLabelText(id);
    return input;
}
