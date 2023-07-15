import mongoose from 'mongoose';

let Subscription;

try {
  Subscription = mongoose.model('Subscribers');
} catch (error) {
  const subscriptionSchema = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
      },
      mailSentLog: [
        {
          mailSend: {
            type: Boolean,
            default: false,
            required: true,
          },
          mailSendAt: {
            type: String,
          },
          mailFailed: {
            type: Boolean,
            default: false,
            required: true,
          },
          mailFailedAt: {
            type: String,
          },
          mailFailedReason: {
            type: String,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );

  Subscription = mongoose.model('Subscribers', subscriptionSchema);
}

export default Subscription;
