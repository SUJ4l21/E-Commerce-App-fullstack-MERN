import userModel from '../models/userModel.js';

const getUserIdFromRequest = (req) => req.userId || req.body?.userId;

// add products to user cart
export const addToCart =
    async (req, res) => {
  try {
    const userId = getUserIdFromRequest(req);
    const {itemId, size} = req.body;

    if (!userId || !itemId || !size) {
      return res.json({success: false, message: 'Missing cart details'});
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({success: false, message: 'User not found'});
    }

     const cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, {cartData});
    res.json({success: true, message: 'Added to cart'});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

// update cart
export const updateCart =
    async (req, res) => {
  try {
    const userId = getUserIdFromRequest(req);
    const {itemId, size, quantity} = req.body;

    if (!userId || !itemId || !size || quantity === undefined) {
      return res.json({success: false, message: 'Missing cart details'});
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({success: false, message: 'User not found'});
    }

    const cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, {cartData});
    res.json({success: true, message: 'cart updated'});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}

// get user cart items
export const getUserCart = async (req, res) => {
  try {
    const userId = getUserIdFromRequest(req);

    if (!userId) {
      return res.json({success: false, message: 'Missing user id'});
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({success: false, message: 'User not found'});
    }

    const cartData = userData.cartData || {};
    res.json({success: true, cartData});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
  }
}
