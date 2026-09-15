import mongoose, { Schema } from 'mongoose'

const hostelSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    monthlyRent: {
      type: Number,
      required: true
    },

    contactNumber: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Hostel = mongoose.models.Hostel || mongoose.model('Hostel', hostelSchema)

export default Hostel
