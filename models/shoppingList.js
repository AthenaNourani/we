const { Schema, model } = require('mongoose')

const shoppingListSchema = new Schema({
    userId: String,
    entries: String,
})

module.exports = model('ShoppingList', shoppingListSchema)