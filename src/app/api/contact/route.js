import { NextResponse } from "next/server";
import validator from "validator";
import sendEmail from "@/utils/sendMail";
import connectDB from "@/config/db";
import Contact from "@/models/Contact";

// Retrieve values from environment variables or provide default values
const {
  EMAILJS_CONTACT_MAIL_TEMPLATE_ID,
  EMAILJS_CONTACT_REPLY_MAIL_TEMPLATE_ID,
  GENERAL_EMAIL_ID,
  SUPPORT_EMAIL_ID,
  IT_PROJECT_EMAIL_ID,
  ELV_PROJECTS_EMAIL_ID,
  SOLUTION_ENQUIRY_EMAIL_ID,
  RTS_USERNAME,
  RTS_PASSWORD,
} = process.env;

const departmentEmails = {
  SalesEnquiries: GENERAL_EMAIL_ID,
  SupportServices: SUPPORT_EMAIL_ID,
  "IT Project": IT_PROJECT_EMAIL_ID,
  "ELV Projects": ELV_PROJECTS_EMAIL_ID,
  "Solution Enquiry": SOLUTION_ENQUIRY_EMAIL_ID,
};

// This api to get all contacts from db
export const GET = async (req, res) => {
  try {
    const username = req.nextUrl.searchParams.get("username");
    const password = req.nextUrl.searchParams.get("password");
    const type = req.nextUrl.searchParams.get("type");
    const email = req.nextUrl.searchParams.get("email");
    const phone = req.nextUrl.searchParams.get("phone");
    if (username === RTS_USERNAME && password === RTS_PASSWORD) {
      await connectDB();

      const typeQuery = type ? { type } : {};
      const emailQuery = email ? { email } : {};
      const phoneQuery = phone ? { phone } : {};

      const contacts = await Contact.find({
        ...typeQuery,
        ...emailQuery,
        ...phoneQuery,
      });

      return NextResponse.json({
        success: true,
        message: "Contact fetched successfully",
        contacts,
      });
    } else {
      throw {
        message: "Unauthorized",
        statusCode: 401,
      };
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "contact fetch failed" },
      { status: error.statusCode || 500 }
    );
  }
};

// This api to create a contact in db
export const POST = async (req, res) => {
  const { fname, lname, email, phone, type, message } = await req.json();
  try {
    await connectDB();

    // Input validation
    if (
      !fname ||
      !lname ||
      !email ||
      !validator.isEmail(email) ||
      !phone ||
      !type ||
      ![
        "SalesEnquiries",
        "SupportServices",
        "IT Project",
        "ELV Projects",
        "Solution Enquiry",
      ].includes(type) ||
      !message
    ) {
      throw {
        statusCode: 400,
        message: !validator.isEmail(email)
          ? "Invalid email address"
          : "Provide fname, lname, email, phone, type - ['SalesEnquiries', 'SupportServices', 'IT Project', 'ELV Projects', 'Solution Enquiry'], message",
      };
    }

    // Check if the contact exists in db in same type
    // const contactExist = await Contact.findOne({
    //   type,
    //   $or: [{ email }, { phone }],
    // });

    // if (contactExist) {
    //   throw {
    //     statusCode: 400,
    //     message: "Your contact already submited",
    //   };
    // }

    // Save contact details to the database
    await Contact.create({
      fname,
      lname,
      type,
      email,
      phone,
      message,
      deptMailId: departmentEmails[type],
    });

    // send the email to the department mail id and handle the mail logs
    await sendEmail(
      "CONTACT_DEPARTMENT_MAIL",
      EMAILJS_CONTACT_MAIL_TEMPLATE_ID,
      {
        name: `${fname} ${lname}`,
        type: type,
        email: email,
        phone: phone,
        deptMailId: departmentEmails[type],
        message: message,
      }
    );

    // Update email log
    await Contact.findOneAndUpdate(
      { type: type, email: email, phone: phone },
      {
        "mailLog.deptMailSend": true,
        "mailLog.deptMailSendAt": new Date(),
      },
      { new: true }
    );

    // send reply to the user
    // await sendEmail(
    //   'CONTACT_REPLY_MAIL',
    //   EMAILJS_CONTACT_REPLY_MAIL_TEMPLATE_ID,
    //   {
    //     name: `${fname} ${lname}`,
    //     type: type,
    //     email: email,
    //   }
    // );

    // Update email reply log
    // await Contact.findOneAndUpdate(
    //   { type: type, email: email, phone: phone },
    //   {
    //     'mailLog.repliedMailSend': true,
    //     'mailLog.repliedMailSendAt': new Date(),
    //   },
    //   { new: true }
    // );

    // Return a success response
    return NextResponse.json(
      {
        message: "Your contact request has been submitted",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Handle email failed error
    if (error.name === "CONTACT_DEPARTMENT_MAIL") {
      await Contact.findOneAndUpdate(
        { type: type, email: email, phone: phone },
        {
          "mailLog.deptMailFailed": true,
          "mailLog.deptMailFailedAt": new Date(),
          "mailLog.deptMailFailedReason": error.message || "Email sent failed",
        },
        { new: true }
      );
    }
    //  else if (error.name === 'CONTACT_REPLY_MAIL') {
    //   await Contact.findOneAndUpdate(
    //     { type: type, email: email, phone: phone },
    //     {
    //       'mailLog.repliedMailFailed': true,
    //       'mailLog.repliedMailFailedAt': new Date(),
    //       'mailLog.repliedMailFailedReason':
    //         error.message || 'Email sent failed',
    //     },
    //     { new: true }
    //   );
    // }

    // Return an error response
    return NextResponse.json(
      {
        message:
          error.message || "Something went wrong. Please try again later",
      },
      {
        status: error.statusCode || 500,
      }
    );
  }
};