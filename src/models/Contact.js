import mongoose from 'mongoose';

let Contact;

try {
  Contact = mongoose.model('Contacts');
} catch (error) {
  const contactSchema = new mongoose.Schema(
    {
      fname: {
        type: String,
        required: true,
      },
      lname: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      deptMailId: {
        type: String,
        required: true,
      },
      mailLog: {
        deptMailSend: {
          type: Boolean,
          default: false,
          required: true,
        },
        deptMailSendAt: {
          type: String,
        },
        deptMailFailed: {
          type: Boolean,
          default: false,
          required: true,
        },
        deptMailFailedAt: {
          type: String,
        },
        deptMailFailedReason: {
          type: String,
        },
        repliedMailSend: {
          type: Boolean,
          default: false,
          required: true,
        },
        repliedMailSendAt: {
          type: String,
        },
        repliedMailFailed: {
          type: Boolean,
          default: false,
          required: true,
        },
        repliedMailFailedAt: {
          type: String,
        },
        repliedMailFailedReason: {
          type: String,
        },
      },
    },
    {
      timestamps: true,
    }
  );

  Contact = mongoose.model('Contacts', contactSchema);
}

export default Contact;
