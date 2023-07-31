const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Username should be at least 5 characters'],
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    img: { 
        type: String, 
        required: [true, 'Image URL is required'] 
    },
    country: { 
        type: String, 
        required: true 
    },
    hashedPassword: { 
        type: String, 
        required: true 
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
    }],
}, { timestamps: { createdAt: 'created_at' } });

// userSchema.index({ email: 1}, {
//     collation: {
//         locale: 'simple',
//         strength: 1
//     }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;