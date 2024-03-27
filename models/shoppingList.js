// const { Schema, model, SchemaTypes } = require('mongoose')
// const shoppingListSchema = new Schema({
//     userId: {
//         type: String,
//         required: true,
//         immutable: true,
//         validate: {
//             validator: value => Number.isInteger(Number(value)) && value.length === 6,
//         },
//     },
//     entries: [
//         {
//             type: SchemaTypes.ObjectId,
//             ref: 'ShoppingListEntry',
//         },
//     ],
// })


// module.exports = model('ShoppingList', shoppingListSchema)
const { Schema, model, SchemaTypes } = require('mongoose');

const shoppingListSchema = new Schema({
    userId: {
        type: String,
        required: true,
        immutable: true,
        validate: {
            validator: value => Number.isInteger(Number(value)) && value.length === 6,
            message: props => `${props.value} ist kein gültiges Alter!`
        }
    },
    entries: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'ShoppingListEntry'
        }
    ]
});

module.exports = model('ShoppingList', shoppingListSchema);
