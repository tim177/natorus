/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51OME0FSCmfGbr9bukzixRLNe74f6Nyfoa8iFvt3cPfi7o0Ci7MoKbAKjT7vsoEDvN0cg7IGiuW1Dfv4VU4Hru5tg00D6F3MJkL',
);

export const bookTour = async (tourId) => {
  try {
    // 1) get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );

    // 2) create checkout session + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
