import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [montant, setMontant] = useState(80000); // Montant en centimes

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { token, error } = await stripe.createToken(
            elements.getElement(CardElement),
        );

        if (error) {
            console.error(error);
        } else {
            try {
                const response = await axios.post(
                    'http://localhost:3001/paiement/paiement',
                    {
                        amount: montant,
                        token: token.id,
                    },
                );
                console.log(response.data); // Réponse du serveur Stripe
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Informations de Carte de Crédit
                <CardElement
                    options={{ style: { base: { fontSize: '16px' } } }}
                />
            </label>
            <button type="submit">Payer</button>
        </form>
    );
};

export default CheckoutForm;
