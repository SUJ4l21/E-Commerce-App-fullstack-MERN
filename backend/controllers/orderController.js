

// placing orders using Cod

import Stripe from 'stripe'
import razorpay from 'razorpay'
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

// global variables
const currency = 'inr'
const deliveryCharge = 10;
// GATEWAY INITIALISE
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const {items, amount, address, paymentMethod = 'cod'} = req.body;

    if (!userId || !Array.isArray(items) || !items.length || !amount ||
        !address) {
      return res.json({success: false, message: 'Missing order details'});
    }

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod,
      payment: paymentMethod === 'cod' ? false : true,
      date: Date.now()
    }

    const newOrder = new orderModel(orderData);
    await newOrder
        .save()

            await userModel.findByIdAndUpdate(userId, {cartData: {}})

    res.json({success: true, message: 'order placed'})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
};
// Make sure you have imported stripe at the top of your file
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrderStripe = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address} = req.body;
    const {origin} = req.headers;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'Stripe',
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // FIXED: Added 'item' argument here so we can access item.name and
    // item.price
    const line_items = items.map(
        (item) => ({
          price_data: {
            currency:
                'inr',  // FIXED: Define your currency here (e.g., 'usd', 'inr')
            product_data: {name: item.name},
            unit_amount: item.price * 100
          },
          quantity: item.quantity
        }));

    // FIXED: Added delivery charge logic
    // Make sure 'deliveryCharge' is defined (e.g., const deliveryCharge = 10;)
    // Or hardcode the amount below if it's static
    line_items.push({
      price_data: {
        currency: 'inr',  // FIXED: Match the currency above
        product_data: {
          name: 'Delivery Charges'  // FIXED: This must be an object with 'name'
        },
        unit_amount: 50 * 100  // Example: 50 is the delivery charge
      },
      quantity: 1
    });

    // FIXED: Correct Stripe API syntax
    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    });

    res.json({success: true, session_url: session.url});

  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
};


const verifyStripe = async (req, res) => {
  const { orderId, success } = req.body;
  const userId = req.userId;
  try {
    if (success === 'true') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}
const placeOrderRazorpay =
    async (req, res) => {
      
}

// all orders data for admin panel

const allOrders =
    async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({success: true, orders});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

const userOrders =
    async (req, res) => {
  try {
    const userId = req.userId
    console.log(userId);
    const orders = await orderModel.find({userId})
    res.json({success: true, orders})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

// update order status from admin panel

const updateStatus =
    async (req, res) => {
  try {
    const {orderId, status} = req.body;
    await orderModel.findByIdAndUpdate(orderId, {status})
    res.json({success: true, message: 'Status updated'})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe
};
