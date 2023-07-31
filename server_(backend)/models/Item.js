const { Schema, model, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    make: { type: String, required: true, minlength: [3, 'Make must be at least 3 characters long'] },
    model: { type: String, required: true, minlength: [3, 'Model must be at least 3 characters long'] },
    year: {
        type: Number, required: true, validate: {
            validator: value => value >= 1900 && value <= 2099,
            message: 'Year must be after 1900'
        }
    },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    price: { type: Number, required: true, min: [0.01, 'Price must be a positive number'] },
    img: { type: String, required: [true, 'Image URL is required'] },
    material: { type: String, default: '' },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: { createdAt: 'created_at' } });

const Item = model('Item', itemSchema);

module.exports = Item;