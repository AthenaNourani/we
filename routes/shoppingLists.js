const express = require('express')
const router = express.Router()
const ShoppingList = require('./../models/shoppingList')

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    res.send(`Shopping list for User ${id}: ${readShoppingListFor(id)}`)
})


router.post('/', async (req, res) => {
    const { id, list } = req.body

    let shoppingList = await ShoppingList.findOne({ userId: id })

    if (shoppingList) {
        res.status(409).send('ID already exists')
        return
    }

    shoppingList = await ShoppingList.create({ userId: id, entries: list })
    res.send(`Shoppinglist for ${id} created successfully`)
})


























router.put('/', (req, res, next) => {
    const { id, list } = req.body
    updateShoppingListFor(id, list)
    res.send(`Updated shopping list for User ${id} successfully!`)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    removeShoppingListEntryFor(id)
    res.send(`Deleted shopping list for User ${id} successfully!`)
})

router.delete('/:id/:entry', (req, res, next) => {
    const { id, entry } = req.params
    removeShoppingListEntryFor(id, entry)
    res.send(`Removed ${entry} from User ${id}'s shopping list successfully!`)
})

module.exports = router