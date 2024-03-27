const { Schema, model } = require('mongoose')

const shoppingListEntrySchema = Schema({
    food: {
        type: String,
        lowercase: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
})

module.exports = model('ShoppingListEntry', shoppingListEntrySchema)