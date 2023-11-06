const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);
const router = new express.Router();
router.post('/paiement', async (req, res) => {
    try {
        const { amount, token } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'eur',
            payment_method: token,
            confirmation_method: 'manual',
        });

        await stripe.paymentIntents.confirm(paymentIntent.id);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
