const express = require('express')

const router = express.Router();

const Actions = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
    Actions.get()
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: 'There was an error retreiving the list.'})
        })
})

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Could not find actions of id."})
        })
})

router.post('/', (req, res) => {
    Actions.insert(req.body)
        .then( action => {
            res.status(201).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Unable to add new project."})
        })
})

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
        .then( action => {
            res.status(201).json(action)
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Could not update."})
        })
})

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
        .then( action => {
            res.status(200).json(action);
        })
        .catch( error => {
            console.log(error)
            res.status(500).json({ message: "Was unable to remove from database."})
        })
})



module.exports = router;