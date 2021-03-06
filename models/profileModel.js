import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    email: { type: String },
    avatar: { type: String },
    about: { type: String },
    collegeYear: { type: String },
    connections: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            name: { type: String },
            avatar: { type: String },
            headline: { type: String },
        }
    ],
    facebook: { type: String },
    followers: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            name: { type: String },
            avatar: { type: String },
            headline: { type: String },
        }
    ],
    following: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            name: { type: String },
            avatar: { type: String },
            headline: { type: String },
        }
    ],
    github: { type: String },
    headline: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    name: { type: String },
    projectDescription: { type: String },
    projectImage1: { type: String },
    projectLink: { type: String },
    projectName: { type: String },
    skill: { type: Array },
    stack: { type: String },
    twitter: { type: String },
    website: { type: String },
},
    { timestamps: true }
)

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)