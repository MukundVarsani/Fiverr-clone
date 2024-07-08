import express, { json } from "express";
import { set, connect as _connect } from "mongoose";
import cors from "cors";
import userRoute from "./route/user.route.js";
import gigRoute from "./route/gig.route.js";
import reviewRoute from "./route/review.route.js";
import orderRoute from "./route/order.route.js";
import conversationRoute from "./route/conversation.route.js";
import messageRoute from "./route/message.route.js";
import authRoute from "./route/auth.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

set("strictQuery", true);
const connect = async () => {
  await _connect("mongodb://0.0.0.0:27017/Fiver").catch((error) =>
    console.log(error)
  );
  console.log("connected with DB sucessfuly");
};
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/messages", messageRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/orders", orderRoute);
app.use("/api/gigs", gigRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).send(message);
});

app.get("/", (req, res) => {
  res.json({
    data: "<h1>hello<h1>",
  });
});

app.listen(3000, () => {
  console.log("started at 'http://localhost:3000/'");
  connect();
});
