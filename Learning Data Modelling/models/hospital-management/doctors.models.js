import mongoose from 'mongoose'

const doctorWorkHoursSchema = new mongoose.Schema({
    workTime: Number,
    required: true
})

const doctorSchema = new mongoose.Schema(
    {
        doctorName: {
            type: String,
            required: true
        },

        salary: {
            type: String,
            required: true
        },

        qualification: {
            type: String,
            required: true
        },

        workExperience: {
            type: Number,
            default: 0
        },

        workInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital",
                workHours: [doctorWorkHoursSchema]
            }
        ]
    } , {timestamps: true});

export const Doctor = mongoose.model("Doctor" , doctorSchema);