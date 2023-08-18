const { Schema, model, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    make: { type: String, required: true, minlength: [3, 'Make must be at least 3 characters long'] },
    model: { type: String, default: '' },
    category: {type: String, required: true,},
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    price: { type: Number, required: true, min: [0.01, 'Price must be a positive number'] },
    img: { type: String, required: [true, 'Image URL is required'] },
    material: { type: String, default: '' },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: { createdAt: 'created_at' } });

const Item = model('Item', itemSchema);

module.exports = Item;