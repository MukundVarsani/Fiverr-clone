import createError from "../utils/createError.js";
import Gig from "../model/gig.model.js";
import order from "../model/order.model.js";


export const createOrder = async (req, res, next) => {
  try {

    const gig = await Gig.findById(req.params.id);

    console.log(gig.price);
    const newOrder = new order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temp",
    });

    await newOrder.save();
    res.status(200).send("sucessfull");
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    
    console.log();

    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};
