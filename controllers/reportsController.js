import orderModel from "../models/orderModel.js";
import customerModel from "../models/customerModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
class ReportsController {
  static reports_get = async (req, res) => {
    const customerId = "57d28452ed5d4d54e868701a";
    const customerObjectId = new ObjectId(customerId);
    console.log("customerObjectId: ", customerObjectId);

    // get customer object from table
    let customer = null;
    // let orders = [];
    try {
      const customer = await customerModel.findById(customerId);
      const orders = await orderModel.find({ customer_id: customerObjectId });
      if (orders) {
        console.log("*********Orders found for customer*********");
        console.log(`orders: ${orders}\n orders length: ${orders.length}`);
        res.render("reports.ejs", { customer: customer, orders: orders });
      } else {
        console.log("*********No orders found for customer*********");
      }
    } catch (error) {
      console.log("!!!!!!!!!!Error in reports_get!!!!!!!!!!: ", error);
    }

    // res.render("reports.ejs");
  };
}

export default ReportsController;
