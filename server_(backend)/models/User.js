const { Schema, model } = require('mongoose');


const userSchema = new Schema({
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
});

// userSchema.index({ email: 1}, {
//     collation: {
//         locale: 'simple',
//         strength: 1
//     }
// });

const User = model('User', userSchema);

module.exports = User;