import validator from "validator";
import { NextResponse } from "next/server";
import sendEmail from "@/utils/sendMail";
import connectDB from "@/config/db";
import Subscription from "@/models/Subscription";

const RTS_USERNAME = process.env.RTS_USERNAME;
const RTS_PASSWORD = process.env.RTS_PASSWORD;

// This api to get all subscribers
export const GET = async (req, res) => {
  try {
    const username = req.nextUrl.searchParams.get("username");
    const password = req.nextUrl.searchParams.get("password");
    if (username === RTS_USERNAME && password === RTS_PASSWORD) {
      await connectDB();

      const activeSubscriptions = await Subscription.find({
        status: "ACTIVE",
      });
      const inactiveSubscriptions = await Subscription.find({
        status: "INACTIVE",
      });

      return NextResponse.json({
        message: "Subscribed successfully",
        subscriptions: {
          activeSubscriptions,
          inactiveSubscriptions,
        },
      });
    } else {
      throw {
        message: "Unauthorized",
        statusCode: 401,
      };
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Subscribtion fetch failed" },
      { status: error.statusCode || 500 }
    );
  }
};

// This api to do subscribe
export const POST = async (req, res) => {
  try {
    const { email } = await req.json();

    if (!email || !validator.isEmail(email)) {
      throw {
        message: "Provide valid email",
        statusCode: 400,
      };
    }

    await connectDB();
    const subscriptionExist = await Subscription.findOne({ email });
    if (subscriptionExist && subscriptionExist.status === "ACTIVE") {
      throw {
        message: "Email is already subscribed",
        statusCode: 400,
      };
    } else if (subscriptionExist && subscriptionExist.status === "INACTIVE") {
      subscriptionExist.status = "ACTIVE";
      await subscriptionExist.save();
    } else {
      await Subscription.create({
        email,
        status: "ACTIVE",
      });
    }

    // Send the "subscribed successfully" email to the user
    await sendEmail("SUBSCRIBE_MAIL", {
      email,
    });

    return NextResponse.json({
      message: "Subscribed successfully",
    });
  } catch (error) {
    console.error("Email subscription failed: ", error);
    return NextResponse.json(
      { message: error.message || "Email subscription failed" },
      { status: error.statusCode || 500 }
    );
  }
};

// This api for check the email is subscribed or not subscribed
export const PUT = async (req, res) => {
  try {
    const { username, password, email } = req.json();
    if (
      username === "OrtmorAgencyBTS@subscribtion" &&
      password === RTS_PASSWORD
    ) {
      if (!email || !validator.isEmail(email)) {
        throw {
          message: "Provide valid email",
          statusCode: 400,
        };
      }
      await connectDB();
      const subscriptionExist = await Subscription.findOne({
        email,
        status: "ACTIVE",
      });

      return NextResponse.json({
        subscribed: subscriptionExist ? true : false,
        message: subscriptionExist
          ? "Email is already subscribed"
          : "Email not subscribed",
      });
    } else {
      throw {
        message: "Unauthorized",
        statusCode: 401,
      };
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Subscribtion fetch failed" },
      { status: error.statusCode || 500 }
    );
  }
};

// This api to sent a mail to subscribers
export const PATCH = async (req, res) => {
  try {
    const { username, password } = await req.json();
    if (username === RTS_USERNAME && password === RTS_PASSWORD) {
      await connectDB();
      const subscriptions = await Subscription.find({
        status: "ACTIVE",
      });

      for (let i = 0; i < subscriptions.length; i++) {
        await sendEmail(
          "SUBSCRIBED_MAIL",
          EMAILJS_SUBSCRIBED_MAIL_TEMPLATE_ID,
          {
            email: subscriptions[i].email,
          }
        )
          .then(() => {})
          .catch((error) => {});
      }

      return NextResponse.json({
        message: "Email sent to all subscribers successfully",
      });
    } else {
      throw {
        message: "Unauthorized",
        statusCode: 401,
      };
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Subscribtion fetch failed" },
      { status: error.statusCode || 500 }
    );
  }
};

// This api to do unsubscribe
export const DELETE = async (req, res) => {
  try {
    const email = req.nextUrl.searchParams.get("email");

    // Validate email input
    if (!email || !validator.isEmail(email)) {
      throw {
        message: "Provide valid email",
        statusCode: 400,
      };
    }
    await connectDB();
    const subscriptionExist = await Subscription.findOne({ email });
    if (
      !subscriptionExist ||
      (subscriptionExist && subscriptionExist.status === "INACTIVE")
    ) {
      throw {
        message: "Email not subscribed",
        statusCode: 400,
      };
    } else {
      subscriptionExist.status = "INACTIVE";
      await subscriptionExist.save();
    }

    // Send the unsubscribed message to user
    await sendEmail("UNSUBSCRIPTION_MAIL", {
      email,
    });

    return NextResponse.json({
      message: "Unsubscribed successfully",
    });
  } catch (error) {
    console.error("Email unsubscription failed: ", error);
    return NextResponse.json(
      { message: error.message || "Email unsubscription failed" },
      { status: error.statusCode || 500 }
    );
  }
};
