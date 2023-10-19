import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '../client/src/styles/Register.css';
import Axios from '../client/src/_services/caller';
import Register from '../client/src/pages/Register';
import '@testing-library/jest-dom';

jest.mock('../client/src/_services/caller', () => ({
    post: jest.fn(),
}));

const testCases = [
    {
        email: 'tristan45220@hotmail.fr',
        password: '123',
        expectedMessage: 'Connexion réussie',
    },
    {
        email: 'tristan45220@hotmail.fr',
        password: 'differentpassword',
        expectedMessage: 'Mot de passe incorrect',
    },
    {
        email: 'another@example.com',
        password: '123',
        expectedMessage: "Cette adresse mail n'est pas enregistré",
    },
];

describe('Test du formulaire de connexion', () => {
    testCases.forEach((testCase) => {
        it(`soumet le formulaire avec l'email "${testCase.email}" et le mot de passe "${testCase.password}"`, async () => {
            Axios.post.mockResolvedValue({
                data: { message: testCase.expectedMessage },
            });

            const { getByTestId } = render(<Register />);

            const emailInput = getByTestId('email');

            const passwordInput = getByTestId('password');

            fireEvent.change(emailInput, {
                target: { value: testCase.email },
            });

            fireEvent.change(passwordInput, {
                target: { value: testCase.password },
            });

            const submitButton = getByTestId('login');
            fireEvent.click(submitButton);

            await waitFor(() => {
                expect(Axios.post).toHaveBeenCalledWith(
                    'http://localhost:3001/login/login',
                    {
                        Email: testCase.email,
                        Password: testCase.password,
                    },
                );
            });

            const errorMessage = screen.getByText(testCase.expectedMessage);
            expect(errorMessage).toBeInTheDocument();
        });
    });
});
