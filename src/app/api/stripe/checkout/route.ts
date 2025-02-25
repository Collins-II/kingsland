import { NextResponse } from "next/server";
import Stripe from "stripe";

const STRIPE_SECRET_KEY="sk_test_51Nqv1pAj1uexx0eAqzmCd5zVCWduyEKmbxEyKE9liLP1IeQ4HetFP0tKmece4FxHjrhrmNOgakgUSoczBtRsYhj700DiwG6Wzy"
const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51Nqv1pAj1uexx0eAqpKbGGGvWql9OtXwDZrcS9WFdsX5VpdpLR7DoIhkYvVHY1xdEz33mLs8zuGcTqrP5ZM8jnG8003qXqFPTM"

const stripe = new Stripe(STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const line_items = items.map((item: { name: string; price: number; quantity: number ,currency: string}) => ({
      price_data: {
        currency:item.currency,
        product_data: { name: item.name },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pay-done?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });


    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Something went wrong" }, { status: 500 });
  }
}
